import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessControlRule } from "./accesscontrolrule";



export class ListAccessControlRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rules", elemType: AccessControlRule })
  rules?: AccessControlRule[];
}
