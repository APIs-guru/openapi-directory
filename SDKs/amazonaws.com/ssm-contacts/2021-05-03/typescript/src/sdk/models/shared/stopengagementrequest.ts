import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopEngagementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EngagementId" })
  engagementId: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
