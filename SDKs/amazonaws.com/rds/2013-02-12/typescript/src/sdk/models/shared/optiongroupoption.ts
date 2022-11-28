import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSetting } from "./optiongroupoptionsetting";



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

  @SpeakeasyMetadata()
  optionsDependedOn?: string[];

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  portRequired?: boolean;
}
