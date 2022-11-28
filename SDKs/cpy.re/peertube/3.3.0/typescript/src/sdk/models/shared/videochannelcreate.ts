import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoChannelCreateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: string;
}
