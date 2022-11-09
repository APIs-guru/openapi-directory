import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionId" })
  protectionId?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
