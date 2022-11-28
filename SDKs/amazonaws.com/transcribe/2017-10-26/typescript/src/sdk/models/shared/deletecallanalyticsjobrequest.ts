import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCallAnalyticsJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName: string;
}
