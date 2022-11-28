import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";



export class CollectionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: Collection })
  collections?: Collection[];
}
