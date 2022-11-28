import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";
export declare class UpdateReplicationJobRequest extends SpeakeasyBase {
    description?: string;
    encrypted?: boolean;
    frequency?: number;
    kmsKeyId?: string;
    licenseType?: LicenseTypeEnum;
    nextReplicationRunStartTime?: Date;
    numberOfRecentAmisToKeep?: number;
    replicationJobId: string;
    roleName?: string;
}
