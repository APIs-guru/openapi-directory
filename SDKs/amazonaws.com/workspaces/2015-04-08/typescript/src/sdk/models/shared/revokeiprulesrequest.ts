import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RevokeIpRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupId" })
  groupId: string;

  @Metadata({ data: "json, name=UserRules" })
  userRules: string[];
}
