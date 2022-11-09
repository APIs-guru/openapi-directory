import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemList } from "./itemlist";
import { ItemList } from "./itemlist";
import { ItemList } from "./itemlist";
import { Person } from "./person";
import { ItemList } from "./itemlist";


export class SearchResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=items" })
  items?: ItemList;

  @Metadata({ data: "json, name=movies" })
  movies?: ItemList;

  @Metadata({ data: "json, name=other" })
  other?: ItemList;

  @Metadata({ data: "json, name=people", elemType: shared.Person })
  people?: Person[];

  @Metadata({ data: "json, name=term" })
  term: string;

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=tv" })
  tv?: ItemList;
}
