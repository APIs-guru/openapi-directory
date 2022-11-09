import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Collection } from "./collection";


export class CollectionsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: shared.Collection })
  collections?: Collection[];
}
