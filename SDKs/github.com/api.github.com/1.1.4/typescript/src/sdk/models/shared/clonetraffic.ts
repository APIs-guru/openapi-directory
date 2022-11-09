import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Traffic } from "./traffic";


// CloneTraffic
/** 
 * Clone Traffic
**/
export class CloneTraffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=clones", elemType: shared.Traffic })
  clones: Traffic[];

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=uniques" })
  uniques: number;
}
