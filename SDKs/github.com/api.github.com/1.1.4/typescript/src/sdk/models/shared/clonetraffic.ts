import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Traffic } from "./traffic";



// CloneTraffic
/** 
 * Clone Traffic
**/
export class CloneTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clones", elemType: Traffic })
  clones: Traffic[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=uniques" })
  uniques: number;
}
