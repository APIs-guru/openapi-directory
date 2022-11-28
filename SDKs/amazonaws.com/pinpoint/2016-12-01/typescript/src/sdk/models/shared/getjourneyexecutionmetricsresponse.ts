import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyExecutionMetricsResponse } from "./journeyexecutionmetricsresponse";



export class GetJourneyExecutionMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneyExecutionMetricsResponse" })
  journeyExecutionMetricsResponse: JourneyExecutionMetricsResponse;
}
