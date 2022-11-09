import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelatedItem } from "./relateditem";


export class ListRelatedItemsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=relatedItems", elemType: shared.RelatedItem })
  relatedItems: RelatedItem[];
}
