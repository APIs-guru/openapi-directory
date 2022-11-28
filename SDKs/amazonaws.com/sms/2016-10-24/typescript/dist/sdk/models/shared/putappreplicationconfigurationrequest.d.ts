import { SpeakeasyBase } from "../../../internal/utils";
import { ServerGroupReplicationConfiguration } from "./servergroupreplicationconfiguration";
export declare class PutAppReplicationConfigurationRequest extends SpeakeasyBase {
    appId?: string;
    serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}
