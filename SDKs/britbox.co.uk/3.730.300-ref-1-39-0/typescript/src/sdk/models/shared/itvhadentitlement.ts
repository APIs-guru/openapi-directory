import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvHadEntitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasHadEntitlements" })
  hasHadEntitlements: boolean;
}
