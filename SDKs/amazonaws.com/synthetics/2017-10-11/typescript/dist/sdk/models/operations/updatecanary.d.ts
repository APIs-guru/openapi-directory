import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateCanaryPathParams extends SpeakeasyBase {
    name: string;
}
export declare class UpdateCanaryHeaders extends SpeakeasyBase {
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
export declare class UpdateCanaryRequestBodyCode extends SpeakeasyBase {
    handler?: string;
    s3Bucket?: string;
    s3Key?: string;
    s3Version?: string;
    zipFile?: string;
}
/**
 * A structure that contains input information for a canary run.
**/
export declare class UpdateCanaryRequestBodyRunConfig extends SpeakeasyBase {
    activeTracing?: boolean;
    environmentVariables?: Map<string, string>;
    memoryInMb?: number;
    timeoutInSeconds?: number;
}
/**
 * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
**/
export declare class UpdateCanaryRequestBodySchedule extends SpeakeasyBase {
    durationInSeconds?: number;
    expression?: string;
}
/**
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
**/
export declare class UpdateCanaryRequestBodyVisualReference extends SpeakeasyBase {
    baseCanaryRunId?: string;
    baseScreenshots?: shared.BaseScreenshot[];
}
/**
 * If this canary is to test an endpoint in a VPC, this structure contains information about the subnets and security groups of the VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html"> Running a Canary in a VPC</a>.
**/
export declare class UpdateCanaryRequestBodyVpcConfig extends SpeakeasyBase {
    securityGroupIds?: string[];
    subnetIds?: string[];
}
export declare class UpdateCanaryRequestBody extends SpeakeasyBase {
    code?: UpdateCanaryRequestBodyCode;
    executionRoleArn?: string;
    failureRetentionPeriodInDays?: number;
    runConfig?: UpdateCanaryRequestBodyRunConfig;
    runtimeVersion?: string;
    schedule?: UpdateCanaryRequestBodySchedule;
    successRetentionPeriodInDays?: number;
    visualReference?: UpdateCanaryRequestBodyVisualReference;
    vpcConfig?: UpdateCanaryRequestBodyVpcConfig;
}
export declare class UpdateCanaryRequest extends SpeakeasyBase {
    pathParams: UpdateCanaryPathParams;
    headers: UpdateCanaryHeaders;
    request: UpdateCanaryRequestBody;
}
export declare class UpdateCanaryResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateCanaryResponse?: Map<string, any>;
    validationException?: any;
}
