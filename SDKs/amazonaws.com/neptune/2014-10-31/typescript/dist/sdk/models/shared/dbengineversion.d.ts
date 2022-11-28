import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { Timezone } from "./timezone";
import { UpgradeTarget } from "./upgradetarget";
/**
 *  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
**/
export declare class DbEngineVersion extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    supportedCharacterSets?: CharacterSet[];
    supportedTimezones?: Timezone[];
    supportsLogExportsToCloudwatchLogs?: boolean;
    supportsReadReplica?: boolean;
    validUpgradeTarget?: UpgradeTarget[];
}
