import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionId" })
  protectionId?: string;
}
