import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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

  @SpeakeasyMetadata()
  optionsDependedOn?: string[];

  @SpeakeasyMetadata()
  portRequired?: boolean;
}
