import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightArn" })
  insightArn: string;
}
