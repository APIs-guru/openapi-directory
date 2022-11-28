import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeEventTrackerXAmzTargetEnum {
    AmazonPersonalizeDescribeEventTracker = "AmazonPersonalize.DescribeEventTracker"
}
export declare class DescribeEventTrackerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventTrackerXAmzTargetEnum;
}
export declare class DescribeEventTrackerRequest extends SpeakeasyBase {
    headers: DescribeEventTrackerHeaders;
    request: shared.DescribeEventTrackerRequest;
}
export declare class DescribeEventTrackerResponse extends SpeakeasyBase {
    contentType: string;
    describeEventTrackerResponse?: shared.DescribeEventTrackerResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
