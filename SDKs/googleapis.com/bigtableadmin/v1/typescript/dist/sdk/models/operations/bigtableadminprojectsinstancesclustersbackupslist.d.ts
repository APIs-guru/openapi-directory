import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersBackupsListSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersBackupsListSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersBackupsListSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersBackupsListSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersBackupsListSecurityOption5;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersBackupsListPathParams;
    queryParams: BigtableadminProjectsInstancesClustersBackupsListQueryParams;
    security: BigtableadminProjectsInstancesClustersBackupsListSecurity;
}
export declare class BigtableadminProjectsInstancesClustersBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
}
