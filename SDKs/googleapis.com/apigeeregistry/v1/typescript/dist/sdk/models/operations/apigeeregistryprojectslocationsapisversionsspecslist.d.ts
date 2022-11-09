import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsListPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsListQueryParams;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsListSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListResponse extends SpeakeasyBase {
    contentType: string;
    listApiSpecsResponse?: shared.ListApiSpecsResponse;
    statusCode: number;
}
