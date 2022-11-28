import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { Timezone } from "./timezone";
import { UpgradeTarget } from "./upgradetarget";
/**
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
**/
export declare class DbEngineVersion extends SpeakeasyBase {
    dbEngineDescription?: string;
    dbEngineVersionDescription?: string;
    dbParameterGroupFamily?: string;
    defaultCharacterSet?: CharacterSet;
    engine?: string;
    engineVersion?: string;
    exportableLogTypes?: string[];
    status?: string;
    supportedCharacterSets?: CharacterSet[];
    supportedEngineModes?: string[];
    supportedFeatureNames?: string[];
    supportedNcharCharacterSets?: CharacterSet[];
    supportedTimezones?: Timezone[];
    supportsGlobalDatabases?: boolean;
    supportsLogExportsToCloudwatchLogs?: boolean;
    supportsParallelQuery?: boolean;
    supportsReadReplica?: boolean;
    validUpgradeTarget?: UpgradeTarget[];
}
