import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitlementDataUnitEnum } from "./entitlementdataunitenum";


// EntitlementData
/** 
 * Data associated with an entitlement resource.
**/
export class EntitlementData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Unit" })
  unit: EntitlementDataUnitEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
