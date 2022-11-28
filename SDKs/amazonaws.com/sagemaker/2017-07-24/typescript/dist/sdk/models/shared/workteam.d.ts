import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";
/**
 * Provides details about a labeling work team.
**/
export declare class Workteam extends SpeakeasyBase {
    createDate?: Date;
    description: string;
    lastUpdatedDate?: Date;
    memberDefinitions: MemberDefinition[];
    notificationConfiguration?: NotificationConfiguration;
    productListingIds?: string[];
    subDomain?: string;
    workforceArn?: string;
    workteamArn: string;
    workteamName: string;
}
