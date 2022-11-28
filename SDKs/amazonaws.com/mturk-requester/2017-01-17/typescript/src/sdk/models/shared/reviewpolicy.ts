import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyParameter } from "./policyparameter";



// ReviewPolicy
/** 
 *  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
**/
export class ReviewPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: PolicyParameter })
  parameters?: PolicyParameter[];

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName: string;
}
