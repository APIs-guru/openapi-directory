import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatabaseResource } from "./databaseresource";
import { LfTagPair } from "./lftagpair";


// TaggedDatabase
/** 
 * A structure describing a database resource with tags.
**/
export class TaggedDatabase extends SpeakeasyBase {
  @Metadata({ data: "json, name=Database" })
  database?: DatabaseResource;

  @Metadata({ data: "json, name=LFTags", elemType: shared.LfTagPair })
  lfTags?: LfTagPair[];
}
