import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";


export class GetAccessControlEffectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Effect" })
  effect?: AccessControlRuleEffectEnum;

  @Metadata({ data: "json, name=MatchedRules" })
  matchedRules?: string[];
}
