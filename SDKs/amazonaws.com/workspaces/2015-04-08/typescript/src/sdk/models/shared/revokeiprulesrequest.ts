import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RevokeIpRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=UserRules" })
  userRules: string[];
}
