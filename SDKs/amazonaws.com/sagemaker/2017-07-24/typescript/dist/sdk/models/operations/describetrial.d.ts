import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTrialXAmzTargetEnum {
    SageMakerDescribeTrial = "SageMaker.DescribeTrial"
}
export declare class DescribeTrialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrialXAmzTargetEnum;
}
export declare class DescribeTrialRequest extends SpeakeasyBase {
    headers: DescribeTrialHeaders;
    request: shared.DescribeTrialRequest;
}
export declare class DescribeTrialResponse extends SpeakeasyBase {
    contentType: string;
    describeTrialResponse?: shared.DescribeTrialResponse;
    resourceNotFound?: any;
    statusCode: number;
}
