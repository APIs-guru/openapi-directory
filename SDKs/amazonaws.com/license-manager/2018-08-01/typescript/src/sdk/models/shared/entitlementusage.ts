import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitlementDataUnitEnum } from "./entitlementdataunitenum";



// EntitlementUsage
/** 
 * Usage associated with an entitlement resource.
**/
export class EntitlementUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedValue" })
  consumedValue: string;

  @SpeakeasyMetadata({ data: "json, name=MaxCount" })
  maxCount?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit: EntitlementDataUnitEnum;
}
