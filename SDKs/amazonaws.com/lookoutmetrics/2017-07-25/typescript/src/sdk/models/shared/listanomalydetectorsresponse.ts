import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnomalyDetectorSummary } from "./anomalydetectorsummary";


export class ListAnomalyDetectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyDetectorSummaryList", elemType: shared.AnomalyDetectorSummary })
  anomalyDetectorSummaryList?: AnomalyDetectorSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
