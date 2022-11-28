import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyExecutionActivityMetricsResponse } from "./journeyexecutionactivitymetricsresponse";



export class GetJourneyExecutionActivityMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneyExecutionActivityMetricsResponse" })
  journeyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse;
}
