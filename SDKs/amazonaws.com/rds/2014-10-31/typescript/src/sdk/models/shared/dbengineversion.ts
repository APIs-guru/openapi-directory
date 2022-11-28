import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { Timezone } from "./timezone";
import { UpgradeTarget } from "./upgradetarget";



// DbEngineVersion
/** 
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
**/
export class DbEngineVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbEngineDescription?: string;

  @SpeakeasyMetadata()
  dbEngineVersionDescription?: string;

  @SpeakeasyMetadata()
  dbParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  defaultCharacterSet?: CharacterSet;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  exportableLogTypes?: string[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata({ elemType: CharacterSet })
  supportedCharacterSets?: CharacterSet[];

  @SpeakeasyMetadata()
  supportedEngineModes?: string[];

  @SpeakeasyMetadata()
  supportedFeatureNames?: string[];

  @SpeakeasyMetadata({ elemType: CharacterSet })
  supportedNcharCharacterSets?: CharacterSet[];

  @SpeakeasyMetadata({ elemType: Timezone })
  supportedTimezones?: Timezone[];

  @SpeakeasyMetadata()
  supportsGlobalDatabases?: boolean;

  @SpeakeasyMetadata()
  supportsLogExportsToCloudwatchLogs?: boolean;

  @SpeakeasyMetadata()
  supportsParallelQuery?: boolean;

  @SpeakeasyMetadata()
  supportsReadReplica?: boolean;

  @SpeakeasyMetadata({ elemType: UpgradeTarget })
  validUpgradeTarget?: UpgradeTarget[];
}
