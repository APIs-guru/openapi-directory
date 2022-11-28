import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExperimentXAmzTargetEnum {
    SageMakerDescribeExperiment = "SageMaker.DescribeExperiment"
}
export declare class DescribeExperimentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExperimentXAmzTargetEnum;
}
export declare class DescribeExperimentRequest extends SpeakeasyBase {
    headers: DescribeExperimentHeaders;
    request: shared.DescribeExperimentRequest;
}
export declare class DescribeExperimentResponse extends SpeakeasyBase {
    contentType: string;
    describeExperimentResponse?: shared.DescribeExperimentResponse;
    resourceNotFound?: any;
    statusCode: number;
}
