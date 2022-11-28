import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTrainingJobXAmzTargetEnum {
    SageMakerDescribeTrainingJob = "SageMaker.DescribeTrainingJob"
}
export declare class DescribeTrainingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrainingJobXAmzTargetEnum;
}
export declare class DescribeTrainingJobRequest extends SpeakeasyBase {
    headers: DescribeTrainingJobHeaders;
    request: shared.DescribeTrainingJobRequest;
}
export declare class DescribeTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    describeTrainingJobResponse?: shared.DescribeTrainingJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
