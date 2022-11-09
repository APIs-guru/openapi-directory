import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLicenseUsageXAmzTargetEnum {
    AwsLicenseManagerGetLicenseUsage = "AWSLicenseManager.GetLicenseUsage"
}


export class GetLicenseUsageHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetLicenseUsageXAmzTargetEnum;
}


export class GetLicenseUsageRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetLicenseUsageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetLicenseUsageRequest;
}


export class GetLicenseUsageResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getLicenseUsageResponse?: shared.GetLicenseUsageResponse;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
