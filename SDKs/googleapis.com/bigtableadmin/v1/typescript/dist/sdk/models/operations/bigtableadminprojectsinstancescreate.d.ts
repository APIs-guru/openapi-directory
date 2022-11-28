import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesCreateSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesCreateSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesCreateSecurityOption1;
    option2?: BigtableadminProjectsInstancesCreateSecurityOption2;
    option3?: BigtableadminProjectsInstancesCreateSecurityOption3;
    option4?: BigtableadminProjectsInstancesCreateSecurityOption4;
    option5?: BigtableadminProjectsInstancesCreateSecurityOption5;
    option6?: BigtableadminProjectsInstancesCreateSecurityOption6;
}
export declare class BigtableadminProjectsInstancesCreateRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesCreatePathParams;
    queryParams: BigtableadminProjectsInstancesCreateQueryParams;
    request?: shared.CreateInstanceRequestInput;
    security: BigtableadminProjectsInstancesCreateSecurity;
}
export declare class BigtableadminProjectsInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
