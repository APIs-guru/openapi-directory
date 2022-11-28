import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterUsageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PublicKeyRotationTimestamp" })
  publicKeyRotationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Signature" })
  signature?: string;
}
