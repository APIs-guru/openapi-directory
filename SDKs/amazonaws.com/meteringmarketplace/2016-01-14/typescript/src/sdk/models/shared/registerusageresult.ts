import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterUsageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=PublicKeyRotationTimestamp" })
  publicKeyRotationTimestamp?: Date;

  @Metadata({ data: "json, name=Signature" })
  signature?: string;
}
