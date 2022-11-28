import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetCallerIdentityActionEnum {
    GetCallerIdentity = "GetCallerIdentity"
}

export enum GetGetCallerIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetGetCallerIdentityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetCallerIdentityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetCallerIdentityVersionEnum;
}


export class GetGetCallerIdentityHeaders extends SpeakeasyBase {
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


export class GetGetCallerIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetCallerIdentityQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetCallerIdentityHeaders;
}


export class GetGetCallerIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
