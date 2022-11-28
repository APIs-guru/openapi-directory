import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDeploymentJobHeaders extends SpeakeasyBase {
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


// CreateDeploymentJobRequestBodyDeploymentConfig
/** 
 * Information about a deployment configuration.
**/
export class CreateDeploymentJobRequestBodyDeploymentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrentDeploymentPercentage" })
  concurrentDeploymentPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=downloadConditionFile" })
  downloadConditionFile?: shared.S3Object;

  @SpeakeasyMetadata({ data: "json, name=failureThresholdPercentage" })
  failureThresholdPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=robotDeploymentTimeoutInSeconds" })
  robotDeploymentTimeoutInSeconds?: number;
}


export class CreateDeploymentJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentApplicationConfigs", elemType: shared.DeploymentApplicationConfig })
  deploymentApplicationConfigs: shared.DeploymentApplicationConfig[];

  @SpeakeasyMetadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: CreateDeploymentJobRequestBodyDeploymentConfig;

  @SpeakeasyMetadata({ data: "json, name=fleet" })
  fleet: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDeploymentJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDeploymentJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDeploymentJobRequestBody;
}


export class CreateDeploymentJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  concurrentDeploymentException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDeploymentJobResponse?: shared.CreateDeploymentJobResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
