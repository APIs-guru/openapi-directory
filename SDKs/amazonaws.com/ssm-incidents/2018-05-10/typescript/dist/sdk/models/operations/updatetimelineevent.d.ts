import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateTimelineEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateTimelineEventRequestBody extends SpeakeasyBase {
    clientToken?: string;
    eventData?: string;
    eventId: string;
    eventTime?: Date;
    eventType?: string;
    incidentRecordArn: string;
}
export declare class UpdateTimelineEventRequest extends SpeakeasyBase {
    headers: UpdateTimelineEventHeaders;
    request: UpdateTimelineEventRequestBody;
}
export declare class UpdateTimelineEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateTimelineEventOutput?: Map<string, any>;
    validationException?: any;
}
