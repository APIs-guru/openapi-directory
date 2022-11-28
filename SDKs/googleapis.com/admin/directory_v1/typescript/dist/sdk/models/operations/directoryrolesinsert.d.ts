import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRolesInsertPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryRolesInsertQueryParams extends SpeakeasyBase {
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
export declare class DirectoryRolesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesInsertRequest extends SpeakeasyBase {
    pathParams: DirectoryRolesInsertPathParams;
    queryParams: DirectoryRolesInsertQueryParams;
    request?: shared.Role;
    security: DirectoryRolesInsertSecurity;
}
export declare class DirectoryRolesInsertResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
