import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseResource } from "./databaseresource";
import { LfTagPair } from "./lftagpair";



// TaggedDatabase
/** 
 * A structure describing a database resource with tags.
**/
export class TaggedDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: DatabaseResource;

  @SpeakeasyMetadata({ data: "json, name=LFTags", elemType: LfTagPair })
  lfTags?: LfTagPair[];
}
