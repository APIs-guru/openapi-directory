import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeHyperParameterTuningJobXAmzTargetEnum {
    SageMakerDescribeHyperParameterTuningJob = "SageMaker.DescribeHyperParameterTuningJob"
}
export declare class DescribeHyperParameterTuningJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHyperParameterTuningJobXAmzTargetEnum;
}
export declare class DescribeHyperParameterTuningJobRequest extends SpeakeasyBase {
    headers: DescribeHyperParameterTuningJobHeaders;
    request: shared.DescribeHyperParameterTuningJobRequest;
}
export declare class DescribeHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    describeHyperParameterTuningJobResponse?: shared.DescribeHyperParameterTuningJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
