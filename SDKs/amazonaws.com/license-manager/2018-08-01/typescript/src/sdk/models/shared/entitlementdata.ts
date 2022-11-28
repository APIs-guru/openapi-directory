import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitlementDataUnitEnum } from "./entitlementdataunitenum";



// EntitlementData
/** 
 * Data associated with an entitlement resource.
**/
export class EntitlementData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit: EntitlementDataUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
