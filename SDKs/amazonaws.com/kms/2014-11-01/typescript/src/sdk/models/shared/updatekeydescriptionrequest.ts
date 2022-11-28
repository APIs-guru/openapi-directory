import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateKeyDescriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
