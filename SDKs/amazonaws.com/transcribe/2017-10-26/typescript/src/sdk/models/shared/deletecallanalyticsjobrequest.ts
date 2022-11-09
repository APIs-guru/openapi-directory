import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCallAnalyticsJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName: string;
}
