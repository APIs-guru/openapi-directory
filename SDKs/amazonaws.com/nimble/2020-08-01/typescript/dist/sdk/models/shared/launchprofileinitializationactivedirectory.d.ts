import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";
export declare class LaunchProfileInitializationActiveDirectory extends SpeakeasyBase {
    computerAttributes?: ActiveDirectoryComputerAttribute[];
    directoryId?: string;
    directoryName?: string;
    dnsIpAddresses?: string[];
    organizationalUnitDistinguishedName?: string;
    studioComponentId?: string;
    studioComponentName?: string;
}
