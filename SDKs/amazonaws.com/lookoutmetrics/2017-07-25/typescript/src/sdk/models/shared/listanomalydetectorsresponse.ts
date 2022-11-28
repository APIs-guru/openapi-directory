import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyDetectorSummary } from "./anomalydetectorsummary";



export class ListAnomalyDetectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyDetectorSummaryList", elemType: AnomalyDetectorSummary })
  anomalyDetectorSummaryList?: AnomalyDetectorSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
