import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";
export declare class CreateReplicationJobRequest extends SpeakeasyBase {
    description?: string;
    encrypted?: boolean;
    frequency?: number;
    kmsKeyId?: string;
    licenseType?: LicenseTypeEnum;
    numberOfRecentAmisToKeep?: number;
    roleName?: string;
    runOnce?: boolean;
    seedReplicationTime: Date;
    serverId: string;
}
