import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SamsungPreviewSectionTile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_data" })
  actionData: string;

  @SpeakeasyMetadata({ data: "json, name=display_from" })
  displayFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=display_until" })
  displayUntil?: Date;

  @SpeakeasyMetadata({ data: "json, name=image_ratio" })
  imageRatio: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl: string;

  @SpeakeasyMetadata({ data: "json, name=is_playable" })
  isPlayable: boolean;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
