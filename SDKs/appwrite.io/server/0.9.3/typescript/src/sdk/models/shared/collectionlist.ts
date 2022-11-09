import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Collection } from "./collection";


// CollectionList
/** 
 * Collections List
**/
export class CollectionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: shared.Collection })
  collections: Collection[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
