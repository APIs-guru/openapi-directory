import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersBackupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    backupId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersBackupsCreatePathParams;
    queryParams: BigtableadminProjectsInstancesClustersBackupsCreateQueryParams;
    request?: shared.BackupInput;
    security: BigtableadminProjectsInstancesClustersBackupsCreateSecurity;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
