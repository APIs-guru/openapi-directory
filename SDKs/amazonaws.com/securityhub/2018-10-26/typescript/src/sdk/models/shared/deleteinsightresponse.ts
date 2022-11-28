import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightArn" })
  insightArn: string;
}
