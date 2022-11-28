import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TaggedResource
/** 
 * A tag and its associated resource.
**/
export class TaggedResource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceName?: string;

  @SpeakeasyMetadata()
  resourceType?: string;

  @SpeakeasyMetadata()
  tag?: Tag;
}
