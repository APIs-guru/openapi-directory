import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterSet } from "./characterset";
import { Timezone } from "./timezone";
import { UpgradeTarget } from "./upgradetarget";



// DbEngineVersion
/** 
 *  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.
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

  @SpeakeasyMetadata({ elemType: CharacterSet })
  supportedCharacterSets?: CharacterSet[];

  @SpeakeasyMetadata({ elemType: Timezone })
  supportedTimezones?: Timezone[];

  @SpeakeasyMetadata()
  supportsLogExportsToCloudwatchLogs?: boolean;

  @SpeakeasyMetadata()
  supportsReadReplica?: boolean;

  @SpeakeasyMetadata({ elemType: UpgradeTarget })
  validUpgradeTarget?: UpgradeTarget[];
}
