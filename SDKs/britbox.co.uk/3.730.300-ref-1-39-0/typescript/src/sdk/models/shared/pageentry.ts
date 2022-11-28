import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemSummary } from "./itemsummary";
import { ItemList } from "./itemlist";
import { Person } from "./person";


export enum PageEntryTypeEnum {
    ItemEntry = "ItemEntry",
    ItemDetailEntry = "ItemDetailEntry",
    ListEntry = "ListEntry",
    ListDetailEntry = "ListDetailEntry",
    UserEntry = "UserEntry",
    TextEntry = "TextEntry",
    ImageEntry = "ImageEntry",
    CustomEntry = "CustomEntry",
    PeopleEntry = "PeopleEntry"
}


// PageEntry
/** 
 * Represents an entry of a Page.
 * Defines what specific piece of content should be presented e.g. an Item or ItemList.
 * Also defines what visual template should be used to render that content.
 * 
**/
export class PageEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: ItemSummary;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=people", elemType: Person })
  people?: Person[];

  @SpeakeasyMetadata({ data: "json, name=template" })
  template: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PageEntryTypeEnum;
}
