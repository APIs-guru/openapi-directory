import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsModelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AutomlProjectsLocationsModelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsListRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsListPathParams;
    queryParams: AutomlProjectsLocationsModelsListQueryParams;
    security: AutomlProjectsLocationsModelsListSecurity;
}
export declare class AutomlProjectsLocationsModelsListResponse extends SpeakeasyBase {
    contentType: string;
    listModelsResponse?: shared.ListModelsResponse;
    statusCode: number;
}
