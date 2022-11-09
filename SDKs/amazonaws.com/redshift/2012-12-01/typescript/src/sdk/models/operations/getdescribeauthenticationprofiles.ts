import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeAuthenticationProfilesActionEnum {
    DescribeAuthenticationProfiles = "DescribeAuthenticationProfiles"
}

export enum GetDescribeAuthenticationProfilesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeAuthenticationProfilesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAuthenticationProfilesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" })
  authenticationProfileName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAuthenticationProfilesVersionEnum;
}


export class GetDescribeAuthenticationProfilesHeaders extends SpeakeasyBase {
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


export class GetDescribeAuthenticationProfilesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeAuthenticationProfilesQueryParams;

  @Metadata()
  headers: GetDescribeAuthenticationProfilesHeaders;
}


export class GetDescribeAuthenticationProfilesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
