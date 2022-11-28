import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ForceDeleteWithoutRecovery" })
  forceDeleteWithoutRecovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RecoveryWindowInDays" })
  recoveryWindowInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
