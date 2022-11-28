import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTrialComponentXAmzTargetEnum {
    SageMakerDescribeTrialComponent = "SageMaker.DescribeTrialComponent"
}
export declare class DescribeTrialComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrialComponentXAmzTargetEnum;
}
export declare class DescribeTrialComponentRequest extends SpeakeasyBase {
    headers: DescribeTrialComponentHeaders;
    request: shared.DescribeTrialComponentRequest;
}
export declare class DescribeTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    describeTrialComponentResponse?: shared.DescribeTrialComponentResponse;
    resourceNotFound?: any;
    statusCode: number;
}
