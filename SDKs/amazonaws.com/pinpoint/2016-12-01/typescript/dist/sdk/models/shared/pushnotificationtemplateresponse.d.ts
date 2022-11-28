import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidPushNotificationTemplate } from "./androidpushnotificationtemplate";
import { ApnsPushNotificationTemplate } from "./apnspushnotificationtemplate";
import { DefaultPushNotificationTemplate } from "./defaultpushnotificationtemplate";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
export declare class PushNotificationTemplateResponse extends SpeakeasyBase {
    adm?: AndroidPushNotificationTemplate;
    apns?: ApnsPushNotificationTemplate;
    arn?: string;
    baidu?: AndroidPushNotificationTemplate;
    creationDate: string;
    default?: DefaultPushNotificationTemplate;
    defaultSubstitutions?: string;
    gcm?: AndroidPushNotificationTemplate;
    lastModifiedDate: string;
    recommenderId?: string;
    templateDescription?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
    version?: string;
    tags?: Map<string, string>;
}
