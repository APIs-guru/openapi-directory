import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsModelsCreateQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsCreateRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsCreatePathParams;
    queryParams: AutomlProjectsLocationsModelsCreateQueryParams;
    request?: shared.Model;
    security: AutomlProjectsLocationsModelsCreateSecurity;
}
export declare class AutomlProjectsLocationsModelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
