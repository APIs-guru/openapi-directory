import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";
import { File } from "./file";
import { Translation } from "./translation";


export class Collection extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_background_color" })
  cardBackgroundColor?: string;

  @Metadata({ data: "json, name=card_background_image" })
  cardBackgroundImage?: File;

  @Metadata({ data: "json, name=card_columns" })
  cardColumns?: number;

  @Metadata({ data: "json, name=card_style" })
  cardStyle?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hidden_from_homepage" })
  hiddenFromHomepage?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: File;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=show_max_items_homepage" })
  showMaxItemsHomepage?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];

  @Metadata({ data: "json, name=visible" })
  visible: boolean;
}
