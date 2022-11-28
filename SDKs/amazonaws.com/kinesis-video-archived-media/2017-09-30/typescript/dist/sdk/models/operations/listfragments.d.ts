import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFragmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListFragmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
**/
export declare class ListFragmentsRequestBodyFragmentSelector extends SpeakeasyBase {
    fragmentSelectorType?: shared.FragmentSelectorTypeEnum;
    timestampRange?: shared.TimestampRange;
}
export declare class ListFragmentsRequestBody extends SpeakeasyBase {
    fragmentSelector?: ListFragmentsRequestBodyFragmentSelector;
    maxResults?: number;
    nextToken?: string;
    streamArn?: string;
    streamName?: string;
}
export declare class ListFragmentsRequest extends SpeakeasyBase {
    queryParams: ListFragmentsQueryParams;
    headers: ListFragmentsHeaders;
    request: ListFragmentsRequestBody;
}
export declare class ListFragmentsResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    listFragmentsOutput?: shared.ListFragmentsOutput;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
