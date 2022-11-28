import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroup } from "./protectiongroup";



export class DescribeProtectionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionGroup" })
  protectionGroup: ProtectionGroup;
}
