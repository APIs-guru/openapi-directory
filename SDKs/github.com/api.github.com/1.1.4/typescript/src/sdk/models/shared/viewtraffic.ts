import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Traffic } from "./traffic";


// ViewTraffic
/** 
 * View Traffic
**/
export class ViewTraffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=uniques" })
  uniques: number;

  @Metadata({ data: "json, name=views", elemType: shared.Traffic })
  views: Traffic[];
}
