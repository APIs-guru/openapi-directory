import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidPushNotificationTemplate } from "./androidpushnotificationtemplate";
import { ApnsPushNotificationTemplate } from "./apnspushnotificationtemplate";
import { AndroidPushNotificationTemplate } from "./androidpushnotificationtemplate";
import { DefaultPushNotificationTemplate } from "./defaultpushnotificationtemplate";
import { AndroidPushNotificationTemplate } from "./androidpushnotificationtemplate";
import { TemplateTypeEnum } from "./templatetypeenum";


// PushNotificationTemplateResponse
/** 
 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
export class PushNotificationTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADM" })
  adm?: AndroidPushNotificationTemplate;

  @Metadata({ data: "json, name=APNS" })
  apns?: ApnsPushNotificationTemplate;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Baidu" })
  baidu?: AndroidPushNotificationTemplate;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=Default" })
  default?: DefaultPushNotificationTemplate;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=GCM" })
  gcm?: AndroidPushNotificationTemplate;

  @Metadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @Metadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;

  @Metadata({ data: "json, name=TemplateType" })
  templateType: TemplateTypeEnum;

  @Metadata({ data: "json, name=Version" })
  version?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
