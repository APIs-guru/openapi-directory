import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessControlRule } from "./accesscontrolrule";


export class ListAccessControlRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rules", elemType: shared.AccessControlRule })
  rules?: AccessControlRule[];
}
