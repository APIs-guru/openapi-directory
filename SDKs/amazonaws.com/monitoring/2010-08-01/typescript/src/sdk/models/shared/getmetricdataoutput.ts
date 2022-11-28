import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageData } from "./messagedata";
import { MetricDataResult } from "./metricdataresult";



export class GetMetricDataOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MessageData })
  messages?: MessageData[];

  @SpeakeasyMetadata({ elemType: MetricDataResult })
  metricDataResults?: MetricDataResult[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
