import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersBackupsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5;
    option6?: BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersBackupsPatchPathParams;
    queryParams: BigtableadminProjectsInstancesClustersBackupsPatchQueryParams;
    request?: shared.BackupInput;
    security: BigtableadminProjectsInstancesClustersBackupsPatchSecurity;
}
export declare class BigtableadminProjectsInstancesClustersBackupsPatchResponse extends SpeakeasyBase {
    backup?: shared.Backup;
    contentType: string;
    statusCode: number;
}
