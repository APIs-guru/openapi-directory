import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterprisePermissionsGetPathParams extends SpeakeasyBase {
    permissionId: string;
}
export declare class AndroidenterprisePermissionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterprisePermissionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterprisePermissionsGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterprisePermissionsGetPathParams;
    queryParams: AndroidenterprisePermissionsGetQueryParams;
    security: AndroidenterprisePermissionsGetSecurity;
}
export declare class AndroidenterprisePermissionsGetResponse extends SpeakeasyBase {
    contentType: string;
    permission?: shared.Permission;
    statusCode: number;
}
