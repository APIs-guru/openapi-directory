import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpRuleItem } from "./ipruleitem";



// WorkspacesIpGroup
/** 
 * Describes an IP access control group.
**/
export class WorkspacesIpGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupDesc" })
  groupDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=userRules", elemType: IpRuleItem })
  userRules?: IpRuleItem[];
}
