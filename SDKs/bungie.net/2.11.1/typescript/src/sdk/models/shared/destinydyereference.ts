import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinyDyeReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  channelHash?: number;

  @SpeakeasyMetadata()
  dyeHash?: number;
}
