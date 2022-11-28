import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpRuleItem } from "./ipruleitem";



export class UpdateRulesOfIpGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=UserRules", elemType: IpRuleItem })
  userRules: IpRuleItem[];
}
