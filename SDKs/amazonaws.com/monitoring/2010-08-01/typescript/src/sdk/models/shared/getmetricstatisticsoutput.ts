import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datapoint } from "./datapoint";



export class GetMetricStatisticsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Datapoint })
  datapoints?: Datapoint[];

  @SpeakeasyMetadata()
  label?: string;
}
