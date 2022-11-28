import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryRolesDeletePathParams extends SpeakeasyBase {
    customer: string;
    roleId: string;
}
export declare class DirectoryRolesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DirectoryRolesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryRolesDeleteRequest extends SpeakeasyBase {
    pathParams: DirectoryRolesDeletePathParams;
    queryParams: DirectoryRolesDeleteQueryParams;
    security: DirectoryRolesDeleteSecurity;
}
export declare class DirectoryRolesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
