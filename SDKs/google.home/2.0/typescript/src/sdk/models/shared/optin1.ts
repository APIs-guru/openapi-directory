import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptIn1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opencast" })
  opencast: boolean;

  @SpeakeasyMetadata({ data: "json, name=preview_channel" })
  previewChannel: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_ducking" })
  remoteDucking: boolean;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: boolean;
}
