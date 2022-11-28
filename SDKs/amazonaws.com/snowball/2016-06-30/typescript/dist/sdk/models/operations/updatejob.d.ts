import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateJob = "AWSIESnowballJobManagementService.UpdateJob"
}
export declare class UpdateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateJobXAmzTargetEnum;
}
export declare class UpdateJobRequest extends SpeakeasyBase {
    headers: UpdateJobHeaders;
    request: shared.UpdateJobRequest;
}
export declare class UpdateJobResponse extends SpeakeasyBase {
    clusterLimitExceededException?: any;
    contentType: string;
    ec2RequestFailedException?: any;
    invalidInputCombinationException?: any;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    kmsRequestFailedException?: any;
    statusCode: number;
    updateJobResult?: Map<string, any>;
}
