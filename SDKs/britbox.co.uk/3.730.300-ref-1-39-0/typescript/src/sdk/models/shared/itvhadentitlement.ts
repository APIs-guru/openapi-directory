import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvHadEntitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasHadEntitlements" })
  hasHadEntitlements: boolean;
}
