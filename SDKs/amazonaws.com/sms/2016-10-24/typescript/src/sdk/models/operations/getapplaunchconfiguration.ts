import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAppLaunchConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration"
}


export class GetAppLaunchConfigurationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAppLaunchConfigurationXAmzTargetEnum;
}


export class GetAppLaunchConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAppLaunchConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAppLaunchConfigurationRequest;
}


export class GetAppLaunchConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAppLaunchConfigurationResponse?: shared.GetAppLaunchConfigurationResponse;

  @Metadata()
  internalError?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  missingRequiredParameterException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedOperationException?: any;
}
