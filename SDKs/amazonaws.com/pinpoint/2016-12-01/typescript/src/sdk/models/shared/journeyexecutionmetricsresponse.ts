import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JourneyExecutionMetricsResponse
/** 
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
**/
export class JourneyExecutionMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=JourneyId" })
  journeyId: string;

  @Metadata({ data: "json, name=LastEvaluatedTime" })
  lastEvaluatedTime: string;

  @Metadata({ data: "json, name=Metrics" })
  metrics: Map<string, string>;
}
