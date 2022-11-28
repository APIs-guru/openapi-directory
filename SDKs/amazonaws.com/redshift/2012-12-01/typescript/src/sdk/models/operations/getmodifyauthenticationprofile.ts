import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyAuthenticationProfileActionEnum {
    ModifyAuthenticationProfile = "ModifyAuthenticationProfile"
}

export enum GetModifyAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyAuthenticationProfileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyAuthenticationProfileActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileContent" })
  authenticationProfileContent: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" })
  authenticationProfileName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyAuthenticationProfileVersionEnum;
}


export class GetModifyAuthenticationProfileHeaders extends SpeakeasyBase {
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


export class GetModifyAuthenticationProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyAuthenticationProfileQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyAuthenticationProfileHeaders;
}


export class GetModifyAuthenticationProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
