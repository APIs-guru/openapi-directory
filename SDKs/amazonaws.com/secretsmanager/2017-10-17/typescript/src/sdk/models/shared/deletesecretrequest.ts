import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ForceDeleteWithoutRecovery" })
  forceDeleteWithoutRecovery?: boolean;

  @Metadata({ data: "json, name=RecoveryWindowInDays" })
  recoveryWindowInDays?: number;

  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
