import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProtectionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionGroupId" })
  protectionGroupId: string;
}
