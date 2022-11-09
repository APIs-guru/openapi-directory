import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeDuration } from "./timeduration";


// ReturnPolicyDetails
/** 
 * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
**/
export class ReturnPolicyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyDescriptionEnabled" })
  policyDescriptionEnabled?: boolean;

  @Metadata({ data: "json, name=refundMethods" })
  refundMethods?: string[];

  @Metadata({ data: "json, name=returnMethods" })
  returnMethods?: string[];

  @Metadata({ data: "json, name=returnPeriods", elemType: shared.TimeDuration })
  returnPeriods?: TimeDuration[];

  @Metadata({ data: "json, name=returnShippingCostPayers" })
  returnShippingCostPayers?: string[];

  @Metadata({ data: "json, name=returnsAcceptanceEnabled" })
  returnsAcceptanceEnabled?: boolean;
}
