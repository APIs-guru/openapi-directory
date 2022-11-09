import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitlementDataUnitEnum } from "./entitlementdataunitenum";


// EntitlementUsage
/** 
 * Usage associated with an entitlement resource.
**/
export class EntitlementUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedValue" })
  consumedValue: string;

  @Metadata({ data: "json, name=MaxCount" })
  maxCount?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Unit" })
  unit: EntitlementDataUnitEnum;
}
