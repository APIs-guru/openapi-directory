import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePushTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreatePushTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
export declare class CreatePushTemplateRequestBodyPushNotificationTemplateRequest extends SpeakeasyBase {
    adm?: shared.AndroidPushNotificationTemplate;
    apns?: shared.ApnsPushNotificationTemplate;
    baidu?: shared.AndroidPushNotificationTemplate;
    default?: shared.DefaultPushNotificationTemplate;
    defaultSubstitutions?: string;
    gcm?: shared.AndroidPushNotificationTemplate;
    recommenderId?: string;
    templateDescription?: string;
    tags?: Map<string, string>;
}
export declare class CreatePushTemplateRequestBody extends SpeakeasyBase {
    pushNotificationTemplateRequest: CreatePushTemplateRequestBodyPushNotificationTemplateRequest;
}
export declare class CreatePushTemplateRequest extends SpeakeasyBase {
    pathParams: CreatePushTemplatePathParams;
    headers: CreatePushTemplateHeaders;
    request: CreatePushTemplateRequestBody;
}
export declare class CreatePushTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createPushTemplateResponse?: shared.CreatePushTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
