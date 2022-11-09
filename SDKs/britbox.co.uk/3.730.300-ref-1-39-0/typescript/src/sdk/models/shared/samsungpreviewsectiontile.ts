import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SamsungPreviewSectionTile extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_data" })
  actionData: string;

  @Metadata({ data: "json, name=display_from" })
  displayFrom?: Date;

  @Metadata({ data: "json, name=display_until" })
  displayUntil?: Date;

  @Metadata({ data: "json, name=image_ratio" })
  imageRatio: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl: string;

  @Metadata({ data: "json, name=is_playable" })
  isPlayable: boolean;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
