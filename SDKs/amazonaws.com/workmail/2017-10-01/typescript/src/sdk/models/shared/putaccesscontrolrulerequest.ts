import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";


export class PutAccessControlRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Actions" })
  actions?: string[];

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Effect" })
  effect: AccessControlRuleEffectEnum;

  @Metadata({ data: "json, name=IpRanges" })
  ipRanges?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NotActions" })
  notActions?: string[];

  @Metadata({ data: "json, name=NotIpRanges" })
  notIpRanges?: string[];

  @Metadata({ data: "json, name=NotUserIds" })
  notUserIds?: string[];

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=UserIds" })
  userIds?: string[];
}
