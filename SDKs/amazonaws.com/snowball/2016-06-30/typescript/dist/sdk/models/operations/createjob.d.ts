import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCreateJob = "AWSIESnowballJobManagementService.CreateJob"
}
export declare class CreateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateJobXAmzTargetEnum;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    headers: CreateJobHeaders;
    request: shared.CreateJobRequest;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    clusterLimitExceededException?: any;
    contentType: string;
    createJobResult?: shared.CreateJobResult;
    ec2RequestFailedException?: any;
    invalidInputCombinationException?: any;
    invalidResourceException?: any;
    kmsRequestFailedException?: any;
    statusCode: number;
}
