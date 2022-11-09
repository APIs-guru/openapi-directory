import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemSummary } from "./itemsummary";
import { ListData } from "./listdata";
import { Pagination } from "./pagination";
import { Theme } from "./theme";

export enum ItemListItemTypesEnum {
    Movie = "movie"
,    Show = "show"
,    Season = "season"
,    Episode = "episode"
,    Program = "program"
,    Link = "link"
,    Trailer = "trailer"
,    Channel = "channel"
,    CustomAsset = "customAsset"
}


// ItemList
/** 
 * A pageable list of items.
**/
export class ItemList extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @Metadata({ data: "json, name=itemTypes" })
  itemTypes?: ItemListItemTypesEnum[];

  @Metadata({ data: "json, name=items", elemType: shared.ItemSummary })
  items: ItemSummary[];

  @Metadata({ data: "json, name=listData" })
  listData?: ListData;

  @Metadata({ data: "json, name=paging" })
  paging: Pagination;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=tagline" })
  tagline?: string;

  @Metadata({ data: "json, name=themes", elemType: shared.Theme })
  themes?: Theme[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
