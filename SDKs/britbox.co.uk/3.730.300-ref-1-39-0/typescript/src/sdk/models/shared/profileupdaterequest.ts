import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProfileUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heroAutoplay" })
  heroAutoplay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=heroWithAudio" })
  heroWithAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pinEnabled" })
  pinEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=purchaseEnabled" })
  purchaseEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: string[];
}
