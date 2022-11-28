import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEnvironmentPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateEnvironmentHeaders extends SpeakeasyBase {
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
export declare class CreateEnvironmentRequestBodyLoggingConfiguration extends SpeakeasyBase {
    dagProcessingLogs?: shared.ModuleLoggingConfigurationInput;
    schedulerLogs?: shared.ModuleLoggingConfigurationInput;
    taskLogs?: shared.ModuleLoggingConfigurationInput;
    webserverLogs?: shared.ModuleLoggingConfigurationInput;
    workerLogs?: shared.ModuleLoggingConfigurationInput;
}
/**
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
export declare class CreateEnvironmentRequestBodyNetworkConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare enum CreateEnvironmentRequestBodyWebserverAccessModeEnum {
    PrivateOnly = "PRIVATE_ONLY",
    PublicOnly = "PUBLIC_ONLY"
}
export declare class CreateEnvironmentRequestBody extends SpeakeasyBase {
    airflowConfigurationOptions?: Map<string, string>;
    airflowVersion?: string;
    dagS3Path: string;
    environmentClass?: string;
    executionRoleArn: string;
    kmsKey?: string;
    loggingConfiguration?: CreateEnvironmentRequestBodyLoggingConfiguration;
    maxWorkers?: number;
    minWorkers?: number;
    networkConfiguration: CreateEnvironmentRequestBodyNetworkConfiguration;
    pluginsS3ObjectVersion?: string;
    pluginsS3Path?: string;
    requirementsS3ObjectVersion?: string;
    requirementsS3Path?: string;
    schedulers?: number;
    sourceBucketArn: string;
    tags?: Map<string, string>;
    webserverAccessMode?: CreateEnvironmentRequestBodyWebserverAccessModeEnum;
    weeklyMaintenanceWindowStart?: string;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    pathParams: CreateEnvironmentPathParams;
    headers: CreateEnvironmentHeaders;
    request: CreateEnvironmentRequestBody;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    createEnvironmentOutput?: shared.CreateEnvironmentOutput;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
