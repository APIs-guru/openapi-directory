import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePushTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdatePushTemplateQueryParams extends SpeakeasyBase {
    createNewVersion?: boolean;
    version?: string;
}
export declare class UpdatePushTemplateHeaders extends SpeakeasyBase {
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
export declare class UpdatePushTemplateRequestBodyPushNotificationTemplateRequest extends SpeakeasyBase {
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
export declare class UpdatePushTemplateRequestBody extends SpeakeasyBase {
    pushNotificationTemplateRequest: UpdatePushTemplateRequestBodyPushNotificationTemplateRequest;
}
export declare class UpdatePushTemplateRequest extends SpeakeasyBase {
    pathParams: UpdatePushTemplatePathParams;
    queryParams: UpdatePushTemplateQueryParams;
    headers: UpdatePushTemplateHeaders;
    request: UpdatePushTemplateRequestBody;
}
export declare class UpdatePushTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updatePushTemplateResponse?: shared.UpdatePushTemplateResponse;
}
