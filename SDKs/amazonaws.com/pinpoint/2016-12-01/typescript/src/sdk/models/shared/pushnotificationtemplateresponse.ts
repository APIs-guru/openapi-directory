import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidPushNotificationTemplate } from "./androidpushnotificationtemplate";
import { ApnsPushNotificationTemplate } from "./apnspushnotificationtemplate";
import { DefaultPushNotificationTemplate } from "./defaultpushnotificationtemplate";
import { TemplateTypeEnum } from "./templatetypeenum";



// PushNotificationTemplateResponse
/** 
 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
export class PushNotificationTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADM" })
  adm?: AndroidPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=APNS" })
  apns?: ApnsPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Baidu" })
  baidu?: AndroidPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=Default" })
  default?: DefaultPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=GCM" })
  gcm?: AndroidPushNotificationTemplate;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedDate" })
  lastModifiedDate: string;

  @SpeakeasyMetadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateType" })
  templateType: TemplateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
