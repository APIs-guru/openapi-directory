import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeDuration } from "./timeduration";


// InternationalReturnOverrideType
/** 
 * This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
**/
export class InternationalReturnOverrideType extends SpeakeasyBase {
  @Metadata({ data: "json, name=returnMethod" })
  returnMethod?: string;

  @Metadata({ data: "json, name=returnPeriod" })
  returnPeriod?: TimeDuration;

  @Metadata({ data: "json, name=returnShippingCostPayer" })
  returnShippingCostPayer?: string;

  @Metadata({ data: "json, name=returnsAccepted" })
  returnsAccepted?: boolean;
}
