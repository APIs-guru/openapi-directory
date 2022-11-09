import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetCallerIdentityActionEnum {
    GetCallerIdentity = "GetCallerIdentity"
}

export enum GetGetCallerIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetGetCallerIdentityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetCallerIdentityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetCallerIdentityVersionEnum;
}


export class GetGetCallerIdentityHeaders extends SpeakeasyBase {
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


export class GetGetCallerIdentityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetCallerIdentityQueryParams;

  @Metadata()
  headers: GetGetCallerIdentityHeaders;
}


export class GetGetCallerIdentityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
