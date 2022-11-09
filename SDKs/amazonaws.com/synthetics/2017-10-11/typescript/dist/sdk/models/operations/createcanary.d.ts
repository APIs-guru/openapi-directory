import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateCanaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Use this structure to input your script code for the canary. This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script was passed into the canary directly, the script code is contained in the value of <code>Zipfile</code>.
**/
export declare class CreateCanaryRequestBodyCode extends SpeakeasyBase {
    handler?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3Version?: string;
    zipFile?: string;
}
/**
 * A structure that contains input information for a canary run.
**/
export declare class CreateCanaryRequestBodyRunConfig extends SpeakeasyBase {
    activeTracing?: boolean;
    environmentVariables?: Map<string, string>;
    memoryInMb?: number;
    timeoutInSeconds?: number;
}
/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
export declare class CreateCanaryRequestBodySchedule extends SpeakeasyBase {
    durationInSeconds?: number;
    expression?: string;
}
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export declare class CreateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class CreateCanaryRequestBody extends SpeakeasyBase {
    artifactS3Location: string;
    code: CreateCanaryRequestBodyCode;
    executionRoleArn: string;
    failureRetentionPeriodInDays?: number;
    name: string;
    runConfig?: CreateCanaryRequestBodyRunConfig;
    runtimeVersion: string;
    schedule: CreateCanaryRequestBodySchedule;
    successRetentionPeriodInDays?: number;
    tags?: Map<string, string>;
    vpcConfig?: CreateCanaryRequestBodyVpcConfig;
}
export declare class CreateCanaryRequest extends SpeakeasyBase {
    headers: CreateCanaryHeaders;
    request: CreateCanaryRequestBody;
}
export declare class CreateCanaryResponse extends SpeakeasyBase {
    contentType: string;
    createCanaryResponse?: shared.CreateCanaryResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
