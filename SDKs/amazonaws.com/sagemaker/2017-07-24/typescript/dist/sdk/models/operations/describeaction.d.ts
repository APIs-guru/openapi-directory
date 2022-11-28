import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeActionXAmzTargetEnum {
    SageMakerDescribeAction = "SageMaker.DescribeAction"
}
export declare class DescribeActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActionXAmzTargetEnum;
}
export declare class DescribeActionRequest extends SpeakeasyBase {
    headers: DescribeActionHeaders;
    request: shared.DescribeActionRequest;
}
export declare class DescribeActionResponse extends SpeakeasyBase {
    contentType: string;
    describeActionResponse?: shared.DescribeActionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
