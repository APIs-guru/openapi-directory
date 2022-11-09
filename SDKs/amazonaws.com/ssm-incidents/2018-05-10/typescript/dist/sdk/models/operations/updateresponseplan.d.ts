import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateResponsePlanHeaders extends SpeakeasyBase {
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
export declare class UpdateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Map<string, any>;
}
export declare class UpdateResponsePlanRequestBody extends SpeakeasyBase {
    actions?: shared.Action[];
    arn: string;
    chatChannel?: UpdateResponsePlanRequestBodyChatChannel;
    clientToken?: string;
    displayName?: string;
    engagements?: string[];
    incidentTemplateDedupeString?: string;
    incidentTemplateImpact?: number;
    incidentTemplateNotificationTargets?: shared.NotificationTargetItem[];
    incidentTemplateSummary?: string;
    incidentTemplateTitle?: string;
}
export declare class UpdateResponsePlanRequest extends SpeakeasyBase {
    headers: UpdateResponsePlanHeaders;
    request: UpdateResponsePlanRequestBody;
}
export declare class UpdateResponsePlanResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateResponsePlanOutput?: Map<string, any>;
    validationException?: any;
}
