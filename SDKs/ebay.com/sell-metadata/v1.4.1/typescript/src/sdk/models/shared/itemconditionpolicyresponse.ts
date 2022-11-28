import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemConditionPolicy } from "./itemconditionpolicy";
import { Error } from "./error";



export class ItemConditionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemConditionPolicies", elemType: ItemConditionPolicy })
  itemConditionPolicies?: ItemConditionPolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
