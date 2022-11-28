import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemSummary } from "./itemsummary";
import { ListData } from "./listdata";
import { Pagination } from "./pagination";
import { Theme } from "./theme";


export enum ItemListItemTypesEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}


// ItemList
/** 
 * A pageable list of items.
**/
export class ItemList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=itemTypes" })
  itemTypes?: ItemListItemTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ItemSummary })
  items: ItemSummary[];

  @SpeakeasyMetadata({ data: "json, name=listData" })
  listData?: ListData;

  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging: Pagination;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=tagline" })
  tagline?: string;

  @SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme })
  themes?: Theme[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
