import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelatedItem } from "./relateditem";



export class ListRelatedItemsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedItems", elemType: RelatedItem })
  relatedItems: RelatedItem[];
}
