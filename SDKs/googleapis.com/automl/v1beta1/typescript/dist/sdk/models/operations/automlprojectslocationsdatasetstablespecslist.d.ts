import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsTableSpecsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsListQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsDatasetsTableSpecsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsListRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsTableSpecsListPathParams;
    queryParams: AutomlProjectsLocationsDatasetsTableSpecsListQueryParams;
    security: AutomlProjectsLocationsDatasetsTableSpecsListSecurity;
}
export declare class AutomlProjectsLocationsDatasetsTableSpecsListResponse extends SpeakeasyBase {
    contentType: string;
    listTableSpecsResponse?: shared.ListTableSpecsResponse;
    statusCode: number;
}
