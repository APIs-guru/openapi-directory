import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProtectionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;
}
