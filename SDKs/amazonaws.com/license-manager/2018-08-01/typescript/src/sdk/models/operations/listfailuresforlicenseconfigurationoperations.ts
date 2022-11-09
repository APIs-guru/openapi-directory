import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum {
    AwsLicenseManagerListFailuresForLicenseConfigurationOperations = "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"
}


export class ListFailuresForLicenseConfigurationOperationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum;
}


export class ListFailuresForLicenseConfigurationOperationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListFailuresForLicenseConfigurationOperationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListFailuresForLicenseConfigurationOperationsRequest;
}


export class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  authorizationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  listFailuresForLicenseConfigurationOperationsResponse?: shared.ListFailuresForLicenseConfigurationOperationsResponse;

  @Metadata()
  rateLimitExceededException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  statusCode: number;
}
