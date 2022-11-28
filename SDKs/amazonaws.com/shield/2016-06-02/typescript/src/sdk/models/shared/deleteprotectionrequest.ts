import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProtectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionId" })
  protectionId: string;
}
