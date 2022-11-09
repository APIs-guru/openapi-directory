import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateIncidentRecordHeaders extends SpeakeasyBase {
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
export declare class UpdateIncidentRecordRequestBodyChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Map<string, any>;
}
export declare enum UpdateIncidentRecordRequestBodyStatusEnum {
    Open = "OPEN",
    Resolved = "RESOLVED"
}
export declare class UpdateIncidentRecordRequestBody extends SpeakeasyBase {
    arn: string;
    chatChannel?: UpdateIncidentRecordRequestBodyChatChannel;
    clientToken?: string;
    impact?: number;
    notificationTargets?: shared.NotificationTargetItem[];
    status?: UpdateIncidentRecordRequestBodyStatusEnum;
    summary?: string;
    title?: string;
}
export declare class UpdateIncidentRecordRequest extends SpeakeasyBase {
    headers: UpdateIncidentRecordHeaders;
    request: UpdateIncidentRecordRequestBody;
}
export declare class UpdateIncidentRecordResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateIncidentRecordOutput?: Map<string, any>;
    validationException?: any;
}
