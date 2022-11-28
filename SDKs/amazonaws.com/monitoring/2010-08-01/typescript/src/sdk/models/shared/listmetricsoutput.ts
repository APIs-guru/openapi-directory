import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";



export class ListMetricsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
