import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JourneyExecutionActivityMetricsResponse
/** 
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
**/
export class JourneyExecutionActivityMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityType" })
  activityType: string;

  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=JourneyActivityId" })
  journeyActivityId: string;

  @Metadata({ data: "json, name=JourneyId" })
  journeyId: string;

  @Metadata({ data: "json, name=LastEvaluatedTime" })
  lastEvaluatedTime: string;

  @Metadata({ data: "json, name=Metrics" })
  metrics: Map<string, string>;
}
