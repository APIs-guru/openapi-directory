import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateRelationalDatabaseRequest extends SpeakeasyBase {
    applyImmediately?: boolean;
    caCertificateIdentifier?: string;
    disableBackupRetention?: boolean;
    enableBackupRetention?: boolean;
    masterUserPassword?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    relationalDatabaseName: string;
    rotateMasterUserPassword?: boolean;
}
