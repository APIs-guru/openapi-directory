import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRolesListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryRolesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryRolesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesListSecurity extends SpeakeasyBase {
    option1?: DirectoryRolesListSecurityOption1;
    option2?: DirectoryRolesListSecurityOption2;
}
export declare class DirectoryRolesListRequest extends SpeakeasyBase {
    pathParams: DirectoryRolesListPathParams;
    queryParams: DirectoryRolesListQueryParams;
    security: DirectoryRolesListSecurity;
}
export declare class DirectoryRolesListResponse extends SpeakeasyBase {
    contentType: string;
    roles?: shared.Roles;
    statusCode: number;
}
