import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisableKeyRotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
