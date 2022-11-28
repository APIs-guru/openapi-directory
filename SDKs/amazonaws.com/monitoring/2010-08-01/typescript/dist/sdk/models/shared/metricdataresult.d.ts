import { SpeakeasyBase } from "../../../internal/utils";
import { MessageData } from "./messagedata";
import { StatusCodeEnum } from "./statuscodeenum";
/**
 * A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
**/
export declare class MetricDataResult extends SpeakeasyBase {
    id?: string;
    label?: string;
    messages?: MessageData[];
    statusCode?: StatusCodeEnum;
    timestamps?: Date[];
    values?: number[];
}
