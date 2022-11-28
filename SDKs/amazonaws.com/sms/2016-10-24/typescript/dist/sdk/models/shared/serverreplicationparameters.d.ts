import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";
/**
 * The replication parameters for replicating a server.
**/
export declare class ServerReplicationParameters extends SpeakeasyBase {
    encrypted?: boolean;
    frequency?: number;
    kmsKeyId?: string;
    licenseType?: LicenseTypeEnum;
    numberOfRecentAmisToKeep?: number;
    runOnce?: boolean;
    seedTime?: Date;
}
