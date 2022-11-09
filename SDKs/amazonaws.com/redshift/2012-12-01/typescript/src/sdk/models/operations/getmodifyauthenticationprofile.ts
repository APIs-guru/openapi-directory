import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyAuthenticationProfileActionEnum {
    ModifyAuthenticationProfile = "ModifyAuthenticationProfile"
}

export enum GetModifyAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyAuthenticationProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyAuthenticationProfileActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileContent" })
  authenticationProfileContent: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" })
  authenticationProfileName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyAuthenticationProfileVersionEnum;
}


export class GetModifyAuthenticationProfileHeaders extends SpeakeasyBase {
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


export class GetModifyAuthenticationProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyAuthenticationProfileQueryParams;

  @Metadata()
  headers: GetModifyAuthenticationProfileHeaders;
}


export class GetModifyAuthenticationProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
