import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { IpRuleItem } from "./ipruleitem";


export class CreateIpGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupDesc" })
  groupDesc?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserRules", elemType: shared.IpRuleItem })
  userRules?: IpRuleItem[];
}
