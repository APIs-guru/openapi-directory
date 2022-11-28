import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteTimelineEventHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTimelineEventRequestBody extends SpeakeasyBase {
    eventId: string;
    incidentRecordArn: string;
}
export declare class DeleteTimelineEventRequest extends SpeakeasyBase {
    headers: DeleteTimelineEventHeaders;
    request: DeleteTimelineEventRequestBody;
}
export declare class DeleteTimelineEventResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteTimelineEventOutput?: Map<string, any>;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
