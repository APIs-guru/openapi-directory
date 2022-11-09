import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpRuleItem } from "./ipruleitem";


export class AuthorizeIpRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId: string;

  @Metadata({ data: "json, name=UserRules", elemType: shared.IpRuleItem })
  userRules: IpRuleItem[];
}
