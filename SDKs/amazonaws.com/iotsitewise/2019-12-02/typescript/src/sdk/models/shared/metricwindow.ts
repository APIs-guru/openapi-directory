import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TumblingWindow } from "./tumblingwindow";



// MetricWindow
/** 
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
**/
export class MetricWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tumbling" })
  tumbling?: TumblingWindow;
}
