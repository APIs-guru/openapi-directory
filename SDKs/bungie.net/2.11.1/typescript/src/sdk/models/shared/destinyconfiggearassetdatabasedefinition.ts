import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinyConfigGearAssetDataBaseDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  path?: string;

  @SpeakeasyMetadata()
  version?: number;
}
