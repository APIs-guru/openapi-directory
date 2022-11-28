import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommonModelsCoreSystem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  parameters?: Map<string, string>;
}
