import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiVersionId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsCreatePathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsCreateQueryParams;
    request?: shared.ApiVersion;
    security: ApigeeregistryProjectsLocationsApisVersionsCreateSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsCreateResponse extends SpeakeasyBase {
    apiVersion?: shared.ApiVersion;
    contentType: string;
    statusCode: number;
}
