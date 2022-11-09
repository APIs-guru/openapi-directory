import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAccessTokenXAmzTargetEnum {
    AwsLicenseManagerGetAccessToken = "AWSLicenseManager.GetAccessToken"
}


export class GetAccessTokenHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetAccessTokenXAmzTargetEnum;
}


export class GetAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAccessTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAccessTokenRequest;
}


export class GetAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getAccessTokenResponse?: shared.GetAccessTokenResponse;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
