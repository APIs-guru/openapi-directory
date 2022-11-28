import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateResponsePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The AWS Chatbot chat channel used for collaboration during an incident.
**/
export declare class CreateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Map<string, any>;
}
/**
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
**/
export declare class CreateResponsePlanRequestBodyIncidentTemplate extends SpeakeasyBase {
    dedupeString?: string;
    impact?: number;
    notificationTargets?: shared.NotificationTargetItem[];
    summary?: string;
    title?: string;
}
export declare class CreateResponsePlanRequestBody extends SpeakeasyBase {
    actions?: shared.Action[];
    chatChannel?: CreateResponsePlanRequestBodyChatChannel;
    clientToken?: string;
    displayName?: string;
    engagements?: string[];
    incidentTemplate: CreateResponsePlanRequestBodyIncidentTemplate;
    name: string;
    tags?: Map<string, string>;
}
export declare class CreateResponsePlanRequest extends SpeakeasyBase {
    headers: CreateResponsePlanHeaders;
    request: CreateResponsePlanRequestBody;
}
export declare class CreateResponsePlanResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createResponsePlanOutput?: shared.CreateResponsePlanOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
