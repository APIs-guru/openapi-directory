import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCallAnalyticsJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName: string;
}
