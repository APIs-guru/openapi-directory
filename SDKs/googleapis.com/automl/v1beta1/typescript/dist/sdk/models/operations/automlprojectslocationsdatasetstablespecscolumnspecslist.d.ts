import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fieldMask?: string;
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
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListPathParams;
    queryParams: AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListQueryParams;
    security: AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListSecurity;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsColumnSpecsListResponse extends SpeakeasyBase {
    contentType: string;
    listColumnSpecsResponse?: shared.ListColumnSpecsResponse;
    statusCode: number;
}
