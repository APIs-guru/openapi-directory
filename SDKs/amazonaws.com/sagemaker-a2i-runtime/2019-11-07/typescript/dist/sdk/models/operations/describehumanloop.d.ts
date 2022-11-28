import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeHumanLoopPathParams extends SpeakeasyBase {
    humanLoopName: string;
}
export declare class DescribeHumanLoopHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeHumanLoopRequest extends SpeakeasyBase {
    pathParams: DescribeHumanLoopPathParams;
    headers: DescribeHumanLoopHeaders;
}
export declare class DescribeHumanLoopResponse extends SpeakeasyBase {
    contentType: string;
    describeHumanLoopResponse?: shared.DescribeHumanLoopResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
