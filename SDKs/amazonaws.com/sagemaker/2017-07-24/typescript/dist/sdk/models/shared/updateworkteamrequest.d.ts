import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";
export declare class UpdateWorkteamRequest extends SpeakeasyBase {
    description?: string;
    memberDefinitions?: MemberDefinition[];
    notificationConfiguration?: NotificationConfiguration;
    workteamName: string;
}
