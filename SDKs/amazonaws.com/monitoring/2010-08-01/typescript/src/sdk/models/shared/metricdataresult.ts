import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageData } from "./messagedata";
import { StatusCodeEnum } from "./statuscodeenum";



// MetricDataResult
/** 
 * A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information.
**/
export class MetricDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  label?: string;

  @SpeakeasyMetadata({ elemType: MessageData })
  messages?: MessageData[];

  @SpeakeasyMetadata()
  statusCode?: StatusCodeEnum;

  @SpeakeasyMetadata()
  timestamps?: Date[];

  @SpeakeasyMetadata()
  values?: number[];
}
