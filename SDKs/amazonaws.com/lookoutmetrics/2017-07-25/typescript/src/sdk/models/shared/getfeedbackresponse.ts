import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesFeedback } from "./timeseriesfeedback";



export class GetFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback", elemType: TimeSeriesFeedback })
  anomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
