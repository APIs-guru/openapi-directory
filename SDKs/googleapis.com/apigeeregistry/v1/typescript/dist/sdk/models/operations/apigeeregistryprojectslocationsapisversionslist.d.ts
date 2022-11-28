import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsListRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsListPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsListQueryParams;
    security: ApigeeregistryProjectsLocationsApisVersionsListSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listApiVersionsResponse?: shared.ListApiVersionsResponse;
    statusCode: number;
}
