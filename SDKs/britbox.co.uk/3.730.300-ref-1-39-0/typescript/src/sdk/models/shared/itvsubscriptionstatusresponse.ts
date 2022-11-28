import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvSubscriptionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive: boolean;
}
