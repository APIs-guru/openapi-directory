import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LfTagPair
/** 
 * A structure containing a tag key-value pair.
**/
export class LfTagPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;

  @SpeakeasyMetadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
