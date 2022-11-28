import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetSessionTokenActionEnum {
    GetSessionToken = "GetSessionToken"
}

export enum GetGetSessionTokenVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetGetSessionTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSessionTokenActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DurationSeconds" })
  durationSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SerialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TokenCode" })
  tokenCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSessionTokenVersionEnum;
}


export class GetGetSessionTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetGetSessionTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetSessionTokenQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetSessionTokenHeaders;
}


export class GetGetSessionTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
