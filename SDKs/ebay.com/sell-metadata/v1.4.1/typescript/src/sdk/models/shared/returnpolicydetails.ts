import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";



// ReturnPolicyDetails
/** 
 * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
**/
export class ReturnPolicyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyDescriptionEnabled" })
  policyDescriptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=refundMethods" })
  refundMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=returnMethods" })
  returnMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=returnPeriods", elemType: TimeDuration })
  returnPeriods?: TimeDuration[];

  @SpeakeasyMetadata({ data: "json, name=returnShippingCostPayers" })
  returnShippingCostPayers?: string[];

  @SpeakeasyMetadata({ data: "json, name=returnsAcceptanceEnabled" })
  returnsAcceptanceEnabled?: boolean;
}
