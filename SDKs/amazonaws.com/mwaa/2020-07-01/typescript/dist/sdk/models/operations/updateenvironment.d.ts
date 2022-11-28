import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEnvironmentPathParams extends SpeakeasyBase {
    name: string;
}
export declare class UpdateEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export declare class UpdateEnvironmentRequestBodyLoggingConfiguration extends SpeakeasyBase {
    dagProcessingLogs?: shared.ModuleLoggingConfigurationInput;
    schedulerLogs?: shared.ModuleLoggingConfigurationInput;
    taskLogs?: shared.ModuleLoggingConfigurationInput;
    webserverLogs?: shared.ModuleLoggingConfigurationInput;
    workerLogs?: shared.ModuleLoggingConfigurationInput;
}
/**
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
export declare class UpdateEnvironmentRequestBodyNetworkConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
}
export declare enum UpdateEnvironmentRequestBodyWebserverAccessModeEnum {
    PrivateOnly = "PRIVATE_ONLY",
    PublicOnly = "PUBLIC_ONLY"
}
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    airflowConfigurationOptions?: Map<string, string>;
    airflowVersion?: string;
    dagS3Path?: string;
    environmentClass?: string;
    executionRoleArn?: string;
    loggingConfiguration?: UpdateEnvironmentRequestBodyLoggingConfiguration;
    maxWorkers?: number;
    minWorkers?: number;
    networkConfiguration?: UpdateEnvironmentRequestBodyNetworkConfiguration;
    pluginsS3ObjectVersion?: string;
    pluginsS3Path?: string;
    requirementsS3ObjectVersion?: string;
    requirementsS3Path?: string;
    schedulers?: number;
    sourceBucketArn?: string;
    webserverAccessMode?: UpdateEnvironmentRequestBodyWebserverAccessModeEnum;
    weeklyMaintenanceWindowStart?: string;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    pathParams: UpdateEnvironmentPathParams;
    headers: UpdateEnvironmentHeaders;
    request: UpdateEnvironmentRequestBody;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateEnvironmentOutput?: shared.UpdateEnvironmentOutput;
    validationException?: any;
}
