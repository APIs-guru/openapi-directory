import { SpeakeasyBase } from "../../../internal/utils";
import { AppPkgNotificationLinks } from "./apppkgnotificationlinks";
import { AppPkgNotificationTypeEnum } from "./apppkgnotificationtypeenum";
import { TimeStamp } from "./timestamp";
export declare enum AppPkgNotificationOperationalStateEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
**/
export declare class AppPkgNotification extends SpeakeasyBase {
    links: AppPkgNotificationLinks;
    appDId: string;
    appPkgId: string;
    id: string;
    notificationType: AppPkgNotificationTypeEnum;
    operationalState: AppPkgNotificationOperationalStateEnum;
    subscriptionId: string;
    timeStamp: TimeStamp;
}
