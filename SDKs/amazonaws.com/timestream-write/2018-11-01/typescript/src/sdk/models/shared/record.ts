import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { MeasureValueTypeEnum } from "./measurevaluetypeenum";
import { TimeUnitEnum } from "./timeunitenum";



// Record
/** 
 * Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp. 
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: Dimension })
  dimensions?: Dimension[];

  @SpeakeasyMetadata({ data: "json, name=MeasureName" })
  measureName?: string;

  @SpeakeasyMetadata({ data: "json, name=MeasureValue" })
  measureValue?: string;

  @SpeakeasyMetadata({ data: "json, name=MeasureValueType" })
  measureValueType?: MeasureValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeUnit" })
  timeUnit?: TimeUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
