import { SpeakeasyBase } from "../../../internal/utils";
import { TumblingWindow } from "./tumblingwindow";
/**
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
**/
export declare class MetricWindow extends SpeakeasyBase {
    tumbling?: TumblingWindow;
}
