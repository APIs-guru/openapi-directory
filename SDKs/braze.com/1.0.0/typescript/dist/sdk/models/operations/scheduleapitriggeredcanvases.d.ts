import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute extends SpeakeasyBase {
    comparison?: string;
    customAttributeName?: string;
    value?: string;
}
export declare class ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd extends SpeakeasyBase {
    customAttribute?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAndCustomAttribute;
}
export declare class ScheduleApiTriggeredCanvasesRequestBodyAudience extends SpeakeasyBase {
    and?: ScheduleApiTriggeredCanvasesRequestBodyAudienceAnd[];
}
export declare class ScheduleApiTriggeredCanvasesRequestBodyRecipients extends SpeakeasyBase {
    canvasEntryProperties?: Map<string, any>;
    externalUserId?: string;
    triggerProperties?: string;
    userAlias?: string;
}
export declare class ScheduleApiTriggeredCanvasesRequestBodySchedule extends SpeakeasyBase {
    atOptimalTime?: boolean;
    inLocalTime?: boolean;
    time?: string;
}
export declare class ScheduleApiTriggeredCanvasesRequestBody extends SpeakeasyBase {
    audience?: ScheduleApiTriggeredCanvasesRequestBodyAudience;
    broadcast?: boolean;
    canvasEntryProperties?: Map<string, any>;
    canvasId?: string;
    recipients?: ScheduleApiTriggeredCanvasesRequestBodyRecipients[];
    schedule?: ScheduleApiTriggeredCanvasesRequestBodySchedule;
}
export declare class ScheduleApiTriggeredCanvasesRequest extends SpeakeasyBase {
    request?: ScheduleApiTriggeredCanvasesRequestBody;
}
export declare class ScheduleApiTriggeredCanvasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
