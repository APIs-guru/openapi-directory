import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CardSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=background_color" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=border_color" })
  borderColor?: string;

  @Metadata({ data: "json, name=border_radius" })
  borderRadius?: string;

  @Metadata({ data: "json, name=border_size" })
  borderSize?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=description_lines" })
  descriptionLines?: number;

  @Metadata({ data: "json, name=icon_border_radius" })
  iconBorderRadius?: string;

  @Metadata({ data: "json, name=icon_shadow_enabled" })
  iconShadowEnabled?: boolean;

  @Metadata({ data: "json, name=icon_size" })
  iconSize?: number;

  @Metadata({ data: "json, name=shadow_enabled" })
  shadowEnabled?: boolean;

  @Metadata({ data: "json, name=show_action" })
  showAction?: boolean;

  @Metadata({ data: "json, name=show_badges" })
  showBadges?: boolean;

  @Metadata({ data: "json, name=show_category" })
  showCategory?: boolean;

  @Metadata({ data: "json, name=show_description" })
  showDescription?: boolean;

  @Metadata({ data: "json, name=style" })
  style?: string;
}
