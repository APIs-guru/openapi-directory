import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSimulationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Compute information for the simulation job.
**/
export declare class CreateSimulationJobRequestBodyCompute extends SpeakeasyBase {
    simulationUnitLimit?: number;
}
export declare enum CreateSimulationJobRequestBodyFailureBehaviorEnum {
    Fail = "Fail",
    Continue = "Continue"
}
/**
 * The logging configuration.
**/
export declare class CreateSimulationJobRequestBodyLoggingConfig extends SpeakeasyBase {
    recordAllRosTopics?: boolean;
}
/**
 * The output location.
**/
export declare class CreateSimulationJobRequestBodyOutputLocation extends SpeakeasyBase {
    s3Bucket?: string;
    s3Prefix?: string;
}
/**
 * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
**/
export declare class CreateSimulationJobRequestBodyVpcConfig extends SpeakeasyBase {
    assignPublicIp?: boolean;
    securityGroups?: string[];
    subnets?: string[];
}
export declare class CreateSimulationJobRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    compute?: CreateSimulationJobRequestBodyCompute;
    dataSources?: shared.DataSourceConfig[];
    failureBehavior?: CreateSimulationJobRequestBodyFailureBehaviorEnum;
    iamRole: string;
    loggingConfig?: CreateSimulationJobRequestBodyLoggingConfig;
    maxJobDurationInSeconds: number;
    outputLocation?: CreateSimulationJobRequestBodyOutputLocation;
    robotApplications?: shared.RobotApplicationConfig[];
    simulationApplications?: shared.SimulationApplicationConfig[];
    tags?: Map<string, string>;
    vpcConfig?: CreateSimulationJobRequestBodyVpcConfig;
}
export declare class CreateSimulationJobRequest extends SpeakeasyBase {
    headers: CreateSimulationJobHeaders;
    request: CreateSimulationJobRequestBody;
}
export declare class CreateSimulationJobResponse extends SpeakeasyBase {
    contentType: string;
    createSimulationJobResponse?: shared.CreateSimulationJobResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
