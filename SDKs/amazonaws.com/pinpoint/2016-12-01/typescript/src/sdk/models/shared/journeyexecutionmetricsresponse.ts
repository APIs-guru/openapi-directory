import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneyExecutionMetricsResponse
/** 
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
**/
export class JourneyExecutionMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=JourneyId" })
  journeyId: string;

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedTime" })
  lastEvaluatedTime: string;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics: Map<string, string>;
}
