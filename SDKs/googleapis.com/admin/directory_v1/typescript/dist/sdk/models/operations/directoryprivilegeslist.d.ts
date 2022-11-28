import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryPrivilegesListPathParams extends SpeakeasyBase {
    customer: string;
}
export declare class DirectoryPrivilegesListQueryParams extends SpeakeasyBase {
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
export declare class DirectoryPrivilegesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryPrivilegesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryPrivilegesListSecurity extends SpeakeasyBase {
    option1?: DirectoryPrivilegesListSecurityOption1;
    option2?: DirectoryPrivilegesListSecurityOption2;
}
export declare class DirectoryPrivilegesListRequest extends SpeakeasyBase {
    pathParams: DirectoryPrivilegesListPathParams;
    queryParams: DirectoryPrivilegesListQueryParams;
    security: DirectoryPrivilegesListSecurity;
}
export declare class DirectoryPrivilegesListResponse extends SpeakeasyBase {
    contentType: string;
    privileges?: shared.Privileges;
    statusCode: number;
}
