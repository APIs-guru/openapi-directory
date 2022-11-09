import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteSecretRequest extends SpeakeasyBase {
    forceDeleteWithoutRecovery?: boolean;
    recoveryWindowInDays?: number;
    secretId: string;
}
