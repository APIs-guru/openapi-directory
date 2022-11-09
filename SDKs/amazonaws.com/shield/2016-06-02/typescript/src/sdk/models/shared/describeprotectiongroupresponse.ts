import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectionGroup } from "./protectiongroup";


export class DescribeProtectionGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionGroup" })
  protectionGroup: ProtectionGroup;
}
