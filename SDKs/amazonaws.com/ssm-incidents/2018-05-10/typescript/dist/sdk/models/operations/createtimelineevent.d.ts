import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTimelineEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTimelineEventRequestBody extends SpeakeasyBase {
    clientToken?: string;
    eventData: string;
    eventTime: Date;
    eventType: string;
    incidentRecordArn: string;
}
export declare class CreateTimelineEventRequest extends SpeakeasyBase {
    headers: CreateTimelineEventHeaders;
    request: CreateTimelineEventRequestBody;
}
export declare class CreateTimelineEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createTimelineEventOutput?: shared.CreateTimelineEventOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
