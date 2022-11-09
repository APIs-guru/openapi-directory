import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetSessionTokenActionEnum {
    GetSessionToken = "GetSessionToken"
}

export enum GetGetSessionTokenVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetGetSessionTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSessionTokenActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DurationSeconds" })
  durationSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TokenCode" })
  tokenCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSessionTokenVersionEnum;
}


export class GetGetSessionTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetGetSessionTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetSessionTokenQueryParams;

  @Metadata()
  headers: GetGetSessionTokenHeaders;
}


export class GetGetSessionTokenResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
