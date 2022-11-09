import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemConditionPolicy } from "./itemconditionpolicy";
import { Error } from "./error";


export class ItemConditionPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemConditionPolicies", elemType: shared.ItemConditionPolicy })
  itemConditionPolicies?: ItemConditionPolicy[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
