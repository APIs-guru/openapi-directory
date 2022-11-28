import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigquerydatatransferProjectsLocationsDataSourcesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListSecurity extends SpeakeasyBase {
    option1?: BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1;
    option2?: BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2;
    option3?: BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListRequest extends SpeakeasyBase {
    pathParams: BigquerydatatransferProjectsLocationsDataSourcesListPathParams;
    queryParams: BigquerydatatransferProjectsLocationsDataSourcesListQueryParams;
    security: BigquerydatatransferProjectsLocationsDataSourcesListSecurity;
}
export declare class BigquerydatatransferProjectsLocationsDataSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listDataSourcesResponse?: shared.ListDataSourcesResponse;
    statusCode: number;
}
