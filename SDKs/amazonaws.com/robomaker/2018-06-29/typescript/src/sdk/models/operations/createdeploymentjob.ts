import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDeploymentJobHeaders extends SpeakeasyBase {
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


// CreateDeploymentJobRequestBodyDeploymentConfig
/** 
 * Information about a deployment configuration.
**/
export class CreateDeploymentJobRequestBodyDeploymentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentDeploymentPercentage" })
  concurrentDeploymentPercentage?: number;

  @Metadata({ data: "json, name=downloadConditionFile" })
  downloadConditionFile?: shared.S3Object;

  @Metadata({ data: "json, name=failureThresholdPercentage" })
  failureThresholdPercentage?: number;

  @Metadata({ data: "json, name=robotDeploymentTimeoutInSeconds" })
  robotDeploymentTimeoutInSeconds?: number;
}


export class CreateDeploymentJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=deploymentApplicationConfigs", elemType: shared.DeploymentApplicationConfig })
  deploymentApplicationConfigs: shared.DeploymentApplicationConfig[];

  @Metadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: CreateDeploymentJobRequestBodyDeploymentConfig;

  @Metadata({ data: "json, name=fleet" })
  fleet: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDeploymentJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDeploymentJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentJobRequestBody;
}


export class CreateDeploymentJobResponse extends SpeakeasyBase {
  @Metadata()
  concurrentDeploymentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createDeploymentJobResponse?: shared.CreateDeploymentJobResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
