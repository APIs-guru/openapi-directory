import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";



// InternationalReturnOverrideType
/** 
 * This type defines the fields for a seller's international return policy. If a seller does not populate the fields in this complex type, the international return policy defaults to the return policy set for domestic returns.
**/
export class InternationalReturnOverrideType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=returnMethod" })
  returnMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPeriod" })
  returnPeriod?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=returnShippingCostPayer" })
  returnShippingCostPayer?: string;

  @SpeakeasyMetadata({ data: "json, name=returnsAccepted" })
  returnsAccepted?: boolean;
}
