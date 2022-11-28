import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CardSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background_color" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=border_color" })
  borderColor?: string;

  @SpeakeasyMetadata({ data: "json, name=border_radius" })
  borderRadius?: string;

  @SpeakeasyMetadata({ data: "json, name=border_size" })
  borderSize?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: number;

  @SpeakeasyMetadata({ data: "json, name=description_lines" })
  descriptionLines?: number;

  @SpeakeasyMetadata({ data: "json, name=icon_border_radius" })
  iconBorderRadius?: string;

  @SpeakeasyMetadata({ data: "json, name=icon_shadow_enabled" })
  iconShadowEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon_size" })
  iconSize?: number;

  @SpeakeasyMetadata({ data: "json, name=shadow_enabled" })
  shadowEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_action" })
  showAction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_badges" })
  showBadges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_category" })
  showCategory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_description" })
  showDescription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: string;
}
