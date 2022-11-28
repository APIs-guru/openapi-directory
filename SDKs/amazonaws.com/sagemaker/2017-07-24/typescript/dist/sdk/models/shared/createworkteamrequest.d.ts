import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";
import { Tag } from "./tag";
export declare class CreateWorkteamRequest extends SpeakeasyBase {
    description: string;
    memberDefinitions: MemberDefinition[];
    notificationConfiguration?: NotificationConfiguration;
    tags?: Tag[];
    workforceName?: string;
    workteamName: string;
}
