import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRolesPatchPathParams extends SpeakeasyBase {
    customer: string;
    roleId: string;
}
export declare class DirectoryRolesPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryRolesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryRolesPatchPathParams;
    queryParams: DirectoryRolesPatchQueryParams;
    request?: shared.Role;
    security: DirectoryRolesPatchSecurity;
}
export declare class DirectoryRolesPatchResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
