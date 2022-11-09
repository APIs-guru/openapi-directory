import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApikeysProjectsLocationsKeysUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApikeysProjectsLocationsKeysUndeleteQueryParams extends SpeakeasyBase {
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
export declare class ApikeysProjectsLocationsKeysUndeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApikeysProjectsLocationsKeysUndeleteRequest extends SpeakeasyBase {
    pathParams: ApikeysProjectsLocationsKeysUndeletePathParams;
    queryParams: ApikeysProjectsLocationsKeysUndeleteQueryParams;
    request?: Map<string, any>;
    security: ApikeysProjectsLocationsKeysUndeleteSecurity;
}
export declare class ApikeysProjectsLocationsKeysUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
