import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TumblingWindow } from "./tumblingwindow";


// MetricWindow
/** 
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
**/
export class MetricWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=tumbling" })
  tumbling?: TumblingWindow;
}
