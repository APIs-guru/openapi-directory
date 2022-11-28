import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppPkgNotificationLinks } from "./apppkgnotificationlinks";
import { AppPkgNotificationTypeEnum } from "./apppkgnotificationtypeenum";
import { TimeStamp } from "./timestamp";


export enum AppPkgNotificationOperationalStateEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// AppPkgNotification
/** 
 * 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
**/
export class AppPkgNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: AppPkgNotificationLinks;

  @SpeakeasyMetadata({ data: "json, name=appDId" })
  appDId: string;

  @SpeakeasyMetadata({ data: "json, name=appPkgId" })
  appPkgId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType: AppPkgNotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=operationalState" })
  operationalState: AppPkgNotificationOperationalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp: TimeStamp;
}
