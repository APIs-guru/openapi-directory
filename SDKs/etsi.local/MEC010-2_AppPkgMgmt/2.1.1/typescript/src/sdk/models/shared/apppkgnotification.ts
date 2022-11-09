import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppPkgNotificationLinks } from "./apppkgnotificationlinks";
import { AppPkgNotificationTypeEnum } from "./apppkgnotificationtypeenum";
import { TimeStamp } from "./timestamp";

export enum AppPkgNotificationOperationalStateEnum {
    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// AppPkgNotification
/** 
 * 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
**/
export class AppPkgNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links: AppPkgNotificationLinks;

  @Metadata({ data: "json, name=appDId" })
  appDId: string;

  @Metadata({ data: "json, name=appPkgId" })
  appPkgId: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=notificationType" })
  notificationType: AppPkgNotificationTypeEnum;

  @Metadata({ data: "json, name=operationalState" })
  operationalState: AppPkgNotificationOperationalStateEnum;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp: TimeStamp;
}
