import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSetting } from "./optiongroupoptionsetting";
import { OptionVersion } from "./optionversion";



// OptionGroupOption
/** 
 * Available option.
**/
export class OptionGroupOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  defaultPort?: number;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  engineName?: string;

  @SpeakeasyMetadata()
  majorEngineVersion?: string;

  @SpeakeasyMetadata()
  minimumRequiredMinorEngineVersion?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupOptionSetting })
  optionGroupOptionSettings?: OptionGroupOptionSetting[];

  @SpeakeasyMetadata({ elemType: OptionVersion })
  optionGroupOptionVersions?: OptionVersion[];

  @SpeakeasyMetadata()
  optionsConflictsWith?: string[];

  @SpeakeasyMetadata()
  optionsDependedOn?: string[];

  @SpeakeasyMetadata()
  permanent?: boolean;

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  portRequired?: boolean;

  @SpeakeasyMetadata()
  requiresAutoMinorEngineVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  supportsOptionVersionDowngrade?: boolean;

  @SpeakeasyMetadata()
  vpcOnly?: boolean;
}
