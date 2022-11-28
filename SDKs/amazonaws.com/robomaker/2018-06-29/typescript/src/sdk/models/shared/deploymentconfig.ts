import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";



// DeploymentConfig
/** 
 * Information about a deployment configuration.
**/
export class DeploymentConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrentDeploymentPercentage" })
  concurrentDeploymentPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=downloadConditionFile" })
  downloadConditionFile?: S3Object;

  @SpeakeasyMetadata({ data: "json, name=failureThresholdPercentage" })
  failureThresholdPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=robotDeploymentTimeoutInSeconds" })
  robotDeploymentTimeoutInSeconds?: number;
}
