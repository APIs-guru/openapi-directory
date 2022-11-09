import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTokenXAmzTargetEnum {
    AwsLicenseManagerCreateToken = "AWSLicenseManager.CreateToken"
}


export class CreateTokenHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTokenXAmzTargetEnum;
}


export class CreateTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTokenRequest;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createTokenResponse?: shared.CreateTokenResponse;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  redirectException?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
