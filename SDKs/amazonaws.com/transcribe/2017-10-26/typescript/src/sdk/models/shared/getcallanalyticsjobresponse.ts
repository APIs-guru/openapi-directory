import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallAnalyticsJob } from "./callanalyticsjob";


export class GetCallAnalyticsJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallAnalyticsJob" })
  callAnalyticsJob?: CallAnalyticsJob;
}
