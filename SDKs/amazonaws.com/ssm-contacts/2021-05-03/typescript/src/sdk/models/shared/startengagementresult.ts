import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartEngagementResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngagementArn" })
  engagementArn: string;
}
