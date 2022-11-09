import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitlementUnitEnum } from "./entitlementunitenum";


// Entitlement
/** 
 * Describes a resource entitled for use with a license.
**/
export class Entitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowCheckIn" })
  allowCheckIn?: boolean;

  @Metadata({ data: "json, name=MaxCount" })
  maxCount?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Overage" })
  overage?: boolean;

  @Metadata({ data: "json, name=Unit" })
  unit: EntitlementUnitEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
