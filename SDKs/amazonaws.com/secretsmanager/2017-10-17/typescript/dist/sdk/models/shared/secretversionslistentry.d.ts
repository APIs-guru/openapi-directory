import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A structure that contains information about one version of a secret.
**/
export declare class SecretVersionsListEntry extends SpeakeasyBase {
    createdDate?: Date;
    kmsKeyIds?: string[];
    lastAccessedDate?: Date;
    versionId?: string;
    versionStages?: string[];
}
