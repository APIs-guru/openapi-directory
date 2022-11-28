import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { Translation } from "./translation";



export class Collection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card_background_color" })
  cardBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=card_background_image" })
  cardBackgroundImage?: File;

  @SpeakeasyMetadata({ data: "json, name=card_columns" })
  cardColumns?: number;

  @SpeakeasyMetadata({ data: "json, name=card_style" })
  cardStyle?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden_from_homepage" })
  hiddenFromHomepage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: File;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=show_max_items_homepage" })
  showMaxItemsHomepage?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation })
  translations?: Translation[];

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible: boolean;
}
