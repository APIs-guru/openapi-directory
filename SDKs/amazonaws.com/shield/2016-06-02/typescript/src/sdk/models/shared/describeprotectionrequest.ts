import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionId" })
  protectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
