import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvSubscriptionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=is_active" })
  isActive: boolean;
}
