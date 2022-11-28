import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";
import { Person } from "./person";



export class SearchResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=movies" })
  movies?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=other" })
  other?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=people", elemType: Person })
  people?: Person[];

  @SpeakeasyMetadata({ data: "json, name=term" })
  term: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=tv" })
  tv?: ItemList;
}
