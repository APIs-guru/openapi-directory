import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { IpRuleItem } from "./ipruleitem";



export class CreateIpGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupDesc" })
  groupDesc?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserRules", elemType: IpRuleItem })
  userRules?: IpRuleItem[];
}
