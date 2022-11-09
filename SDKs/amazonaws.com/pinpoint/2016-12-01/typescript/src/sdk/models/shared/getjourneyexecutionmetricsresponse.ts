import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JourneyExecutionMetricsResponse } from "./journeyexecutionmetricsresponse";


export class GetJourneyExecutionMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JourneyExecutionMetricsResponse" })
  journeyExecutionMetricsResponse: JourneyExecutionMetricsResponse;
}
