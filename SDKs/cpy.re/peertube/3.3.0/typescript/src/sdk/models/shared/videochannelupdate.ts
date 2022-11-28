import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoChannelUpdateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulkVideosSupportUpdate" })
  bulkVideosSupportUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: string;
}
