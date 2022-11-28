import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateAuthenticationProfileActionEnum {
    CreateAuthenticationProfile = "CreateAuthenticationProfile"
}

export enum GetCreateAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetCreateAuthenticationProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateAuthenticationProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileContent" })
  authenticationProfileContent: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" })
  authenticationProfileName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateAuthenticationProfileVersionEnum;
}


export class GetCreateAuthenticationProfileHeaders extends SpeakeasyBase {
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


export class GetCreateAuthenticationProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateAuthenticationProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateAuthenticationProfileHeaders;
}


export class GetCreateAuthenticationProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
