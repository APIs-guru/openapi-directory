import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Traffic } from "./traffic";



// ViewTraffic
/** 
 * View Traffic
**/
export class ViewTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=uniques" })
  uniques: number;

  @SpeakeasyMetadata({ data: "json, name=views", elemType: Traffic })
  views: Traffic[];
}
