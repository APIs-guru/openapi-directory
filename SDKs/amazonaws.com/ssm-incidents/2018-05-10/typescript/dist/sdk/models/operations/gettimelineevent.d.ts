import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTimelineEventQueryParams extends SpeakeasyBase {
    eventId: string;
    incidentRecordArn: string;
}
export declare class GetTimelineEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTimelineEventRequest extends SpeakeasyBase {
    queryParams: GetTimelineEventQueryParams;
    headers: GetTimelineEventHeaders;
}
export declare class GetTimelineEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getTimelineEventOutput?: shared.GetTimelineEventOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
