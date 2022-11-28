import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyRotationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
