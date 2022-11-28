import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";



// AccessControlRule
/** 
 * A rule that controls access to an Amazon WorkMail organization.
**/
export class AccessControlRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Actions" })
  actions?: string[];

  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Effect" })
  effect?: AccessControlRuleEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=IpRanges" })
  ipRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NotActions" })
  notActions?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotIpRanges" })
  notIpRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=NotUserIds" })
  notUserIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=UserIds" })
  userIds?: string[];
}
