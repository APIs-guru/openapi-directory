import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeContextXAmzTargetEnum {
    SageMakerDescribeContext = "SageMaker.DescribeContext"
}
export declare class DescribeContextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContextXAmzTargetEnum;
}
export declare class DescribeContextRequest extends SpeakeasyBase {
    headers: DescribeContextHeaders;
    request: shared.DescribeContextRequest;
}
export declare class DescribeContextResponse extends SpeakeasyBase {
    contentType: string;
    describeContextResponse?: shared.DescribeContextResponse;
    resourceNotFound?: any;
    statusCode: number;
}
