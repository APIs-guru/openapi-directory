import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigGroupTheme extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  folder?: string;

  @SpeakeasyMetadata()
  name?: string;
}
