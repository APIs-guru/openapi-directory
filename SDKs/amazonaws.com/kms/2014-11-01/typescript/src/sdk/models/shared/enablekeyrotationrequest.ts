import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableKeyRotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
