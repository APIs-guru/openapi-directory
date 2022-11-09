import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemSummary } from "./itemsummary";
import { ItemList } from "./itemlist";
import { Person } from "./person";

export enum PageEntryTypeEnum {
    ItemEntry = "ItemEntry"
,    ItemDetailEntry = "ItemDetailEntry"
,    ListEntry = "ListEntry"
,    ListDetailEntry = "ListDetailEntry"
,    UserEntry = "UserEntry"
,    TextEntry = "TextEntry"
,    ImageEntry = "ImageEntry"
,    CustomEntry = "CustomEntry"
,    PeopleEntry = "PeopleEntry"
}


// PageEntry
/** 
 * Represents an entry of a Page.
 * Defines what specific piece of content should be presented e.g. an Item or ItemList.
 * Also defines what visual template should be used to render that content.
 * 
**/
export class PageEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @Metadata({ data: "json, name=item" })
  item?: ItemSummary;

  @Metadata({ data: "json, name=list" })
  list?: ItemList;

  @Metadata({ data: "json, name=people", elemType: shared.Person })
  people?: Person[];

  @Metadata({ data: "json, name=template" })
  template: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: PageEntryTypeEnum;
}
