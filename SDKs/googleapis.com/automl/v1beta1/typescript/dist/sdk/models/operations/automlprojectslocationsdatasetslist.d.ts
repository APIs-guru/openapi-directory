import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsDatasetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AutomlProjectsLocationsDatasetsListQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsDatasetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsDatasetsListRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsDatasetsListPathParams;
    queryParams: AutomlProjectsLocationsDatasetsListQueryParams;
    security: AutomlProjectsLocationsDatasetsListSecurity;
}
export declare class AutomlProjectsLocationsDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    listDatasetsResponse?: shared.ListDatasetsResponse;
    statusCode: number;
}
