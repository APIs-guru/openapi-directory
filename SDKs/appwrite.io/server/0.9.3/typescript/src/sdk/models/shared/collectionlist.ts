import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";



// CollectionList
/** 
 * Collections List
**/
export class CollectionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: Collection })
  collections: Collection[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
