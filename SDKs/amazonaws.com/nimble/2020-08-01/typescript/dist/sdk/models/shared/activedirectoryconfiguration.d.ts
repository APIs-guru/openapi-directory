import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";
/**
 * The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.
**/
export declare class ActiveDirectoryConfiguration extends SpeakeasyBase {
    computerAttributes?: ActiveDirectoryComputerAttribute[];
    directoryId?: string;
    organizationalUnitDistinguishedName?: string;
}
