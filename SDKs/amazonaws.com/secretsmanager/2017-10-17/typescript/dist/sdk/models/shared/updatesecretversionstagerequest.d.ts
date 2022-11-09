import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateSecretVersionStageRequest extends SpeakeasyBase {
    moveToVersionId?: string;
    removeFromVersionId?: string;
    secretId: string;
    versionStage: string;
}
