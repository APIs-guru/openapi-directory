import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LfTagKeyResource
/** 
 * A structure containing a tag key and values for a resource.
**/
export class LfTagKeyResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey: string;

  @SpeakeasyMetadata({ data: "json, name=TagValues" })
  tagValues: string[];
}
