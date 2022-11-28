import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneyExecutionActivityMetricsResponse
/** 
 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
**/
export class JourneyExecutionActivityMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityType" })
  activityType: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=JourneyActivityId" })
  journeyActivityId: string;

  @SpeakeasyMetadata({ data: "json, name=JourneyId" })
  journeyId: string;

  @SpeakeasyMetadata({ data: "json, name=LastEvaluatedTime" })
  lastEvaluatedTime: string;

  @SpeakeasyMetadata({ data: "json, name=Metrics" })
  metrics: Map<string, string>;
}
