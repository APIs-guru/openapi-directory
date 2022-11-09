import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LfTagKeyResource
/** 
 * A structure containing a tag key and values for a resource.
**/
export class LfTagKeyResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=TagKey" })
  tagKey: string;

  @Metadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
