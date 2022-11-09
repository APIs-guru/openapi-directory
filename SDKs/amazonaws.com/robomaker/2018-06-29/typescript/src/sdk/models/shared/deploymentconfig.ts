import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Object } from "./s3object";


// DeploymentConfig
/** 
 * Information about a deployment configuration.
**/
export class DeploymentConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentDeploymentPercentage" })
  concurrentDeploymentPercentage?: number;

  @Metadata({ data: "json, name=downloadConditionFile" })
  downloadConditionFile?: S3Object;

  @Metadata({ data: "json, name=failureThresholdPercentage" })
  failureThresholdPercentage?: number;

  @Metadata({ data: "json, name=robotDeploymentTimeoutInSeconds" })
  robotDeploymentTimeoutInSeconds?: number;
}
