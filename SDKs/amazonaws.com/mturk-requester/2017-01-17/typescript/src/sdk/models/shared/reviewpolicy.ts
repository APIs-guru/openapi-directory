import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyParameter } from "./policyparameter";


// ReviewPolicy
/** 
 *  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. 
**/
export class ReviewPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameters", elemType: shared.PolicyParameter })
  parameters?: PolicyParameter[];

  @Metadata({ data: "json, name=PolicyName" })
  policyName: string;
}
