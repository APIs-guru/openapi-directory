import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApikeysProjectsLocationsKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApikeysProjectsLocationsKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysListSecurity extends SpeakeasyBase {
    option1?: ApikeysProjectsLocationsKeysListSecurityOption1;
    option2?: ApikeysProjectsLocationsKeysListSecurityOption2;
}
export declare class ApikeysProjectsLocationsKeysListRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysListPathParams;
    queryParams: ApikeysProjectsLocationsKeysListQueryParams;
    security: ApikeysProjectsLocationsKeysListSecurity;
}
export declare class ApikeysProjectsLocationsKeysListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    v2ListKeysResponse?: shared.V2ListKeysResponse;
}
