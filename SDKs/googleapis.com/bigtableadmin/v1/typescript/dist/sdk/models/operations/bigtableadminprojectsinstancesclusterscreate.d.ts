import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesClustersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clusterId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersCreateSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersCreateSecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersCreateSecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersCreateSecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersCreateSecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersCreateSecurityOption5;
    option6?: BigtableadminProjectsInstancesClustersCreateSecurityOption6;
}
export declare class BigtableadminProjectsInstancesClustersCreateRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersCreatePathParams;
    queryParams: BigtableadminProjectsInstancesClustersCreateQueryParams;
    request?: shared.ClusterInput;
    security: BigtableadminProjectsInstancesClustersCreateSecurity;
}
export declare class BigtableadminProjectsInstancesClustersCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
