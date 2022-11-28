import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteAuthenticationProfileActionEnum {
    DeleteAuthenticationProfile = "DeleteAuthenticationProfile"
}

export enum GetDeleteAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDeleteAuthenticationProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteAuthenticationProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" })
  authenticationProfileName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteAuthenticationProfileVersionEnum;
}


export class GetDeleteAuthenticationProfileHeaders extends SpeakeasyBase {
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


export class GetDeleteAuthenticationProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteAuthenticationProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteAuthenticationProfileHeaders;
}


export class GetDeleteAuthenticationProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
