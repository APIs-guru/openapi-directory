import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJob } from "./callanalyticsjob";



export class StartCallAnalyticsJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJob" })
  callAnalyticsJob?: CallAnalyticsJob;
}
