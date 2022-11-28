import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemConfigurationManager } from "./operatingsystemconfigurationmanager";
/**
 * Describes supported operating systems in AWS OpsWorks Stacks.
**/
export declare class OperatingSystem extends SpeakeasyBase {
    configurationManagers?: OperatingSystemConfigurationManager[];
    id?: string;
    name?: string;
    reportedName?: string;
    reportedVersion?: string;
    supported?: boolean;
    type?: string;
}
