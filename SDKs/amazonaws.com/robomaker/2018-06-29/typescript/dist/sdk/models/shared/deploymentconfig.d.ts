import { SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
/**
 * Information about a deployment configuration.
**/
export declare class DeploymentConfig extends SpeakeasyBase {
    concurrentDeploymentPercentage?: number;
    downloadConditionFile?: S3Object;
    failureThresholdPercentage?: number;
    robotDeploymentTimeoutInSeconds?: number;
}
