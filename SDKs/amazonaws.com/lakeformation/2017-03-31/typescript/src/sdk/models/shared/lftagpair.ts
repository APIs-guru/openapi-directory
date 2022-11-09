import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LfTagPair
/** 
 * A structure containing a tag key-value pair.
**/
export class LfTagPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=TagKey" })
  tagKey: string;

  @Metadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
