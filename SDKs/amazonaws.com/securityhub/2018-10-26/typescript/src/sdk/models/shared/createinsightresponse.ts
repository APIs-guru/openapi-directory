import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateInsightResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightArn" })
  insightArn: string;
}
