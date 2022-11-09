import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInsightResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightArn" })
  insightArn: string;
}
