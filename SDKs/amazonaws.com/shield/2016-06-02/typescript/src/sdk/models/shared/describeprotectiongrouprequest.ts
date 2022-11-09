import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProtectionGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;
}
