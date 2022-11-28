import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";



// ColumnLfTag
/** 
 * A structure containing the name of a column resource and the tags attached to it.
**/
export class ColumnLfTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LFTags", elemType: LfTagPair })
  lfTags?: LfTagPair[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
