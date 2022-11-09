import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LfTagPair } from "./lftagpair";


// ColumnLfTag
/** 
 * A structure containing the name of a column resource and the tags attached to it.
**/
export class ColumnLfTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=LFTags", elemType: shared.LfTagPair })
  lfTags?: LfTagPair[];

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
