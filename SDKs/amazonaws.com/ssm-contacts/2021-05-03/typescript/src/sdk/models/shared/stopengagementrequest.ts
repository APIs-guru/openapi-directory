import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopEngagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EngagementId" })
  engagementId: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
