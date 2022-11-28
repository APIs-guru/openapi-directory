import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRolesGetPathParams extends SpeakeasyBase {
    customer: string;
    roleId: string;
}
export declare class DirectoryRolesGetQueryParams extends SpeakeasyBase {
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
export declare class DirectoryRolesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesGetSecurity extends SpeakeasyBase {
    option1?: DirectoryRolesGetSecurityOption1;
    option2?: DirectoryRolesGetSecurityOption2;
}
export declare class DirectoryRolesGetRequest extends SpeakeasyBase {
    pathParams: DirectoryRolesGetPathParams;
    queryParams: DirectoryRolesGetQueryParams;
    security: DirectoryRolesGetSecurity;
}
export declare class DirectoryRolesGetResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
