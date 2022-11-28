import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeTrackerPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class DescribeTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeTrackerRequest extends SpeakeasyBase {
    pathParams: DescribeTrackerPathParams;
    headers: DescribeTrackerHeaders;
}
export declare class DescribeTrackerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeTrackerResponse?: shared.DescribeTrackerResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
