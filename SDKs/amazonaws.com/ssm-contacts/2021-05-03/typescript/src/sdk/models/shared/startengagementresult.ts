import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartEngagementResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngagementArn" })
  engagementArn: string;
}
