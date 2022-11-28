import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggedResource } from "./taggedresource";



// TaggedResourceListMessage
/** 
 * <p/>
**/
export class TaggedResourceListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: TaggedResource })
  taggedResources?: TaggedResource[];
}
