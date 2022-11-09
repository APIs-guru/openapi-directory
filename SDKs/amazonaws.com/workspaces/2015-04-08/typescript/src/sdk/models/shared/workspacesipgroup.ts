import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpRuleItem } from "./ipruleitem";


// WorkspacesIpGroup
/** 
 * Describes an IP access control group.
**/
export class WorkspacesIpGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupDesc" })
  groupDesc?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=userRules", elemType: shared.IpRuleItem })
  userRules?: IpRuleItem[];
}
