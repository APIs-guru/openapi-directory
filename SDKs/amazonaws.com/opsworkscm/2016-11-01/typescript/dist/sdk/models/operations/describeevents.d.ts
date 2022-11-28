import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeEventsXAmzTargetEnum {
    OpsWorksCmV20161101DescribeEvents = "OpsWorksCM_V2016_11_01.DescribeEvents"
}
export declare class DescribeEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventsXAmzTargetEnum;
}
export declare class DescribeEventsRequest extends SpeakeasyBase {
    queryParams: DescribeEventsQueryParams;
    headers: DescribeEventsHeaders;
    request: shared.DescribeEventsRequest;
}
export declare class DescribeEventsResponse extends SpeakeasyBase {
    contentType: string;
    describeEventsResponse?: shared.DescribeEventsResponse;
    invalidNextTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
