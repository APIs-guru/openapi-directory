import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitlementUnitEnum } from "./entitlementunitenum";



// Entitlement
/** 
 * Describes a resource entitled for use with a license.
**/
export class Entitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCheckIn" })
  allowCheckIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxCount" })
  maxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Overage" })
  overage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit: EntitlementUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
