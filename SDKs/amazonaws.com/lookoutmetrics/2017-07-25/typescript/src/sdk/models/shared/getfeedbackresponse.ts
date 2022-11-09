import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeSeriesFeedback } from "./timeseriesfeedback";


export class GetFeedbackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroupTimeSeriesFeedback", elemType: shared.TimeSeriesFeedback })
  anomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
