import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisListRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisListPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisListQueryParams;
    security: ApigeeregistryProjectsLocationsApisListSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisListResponse extends SpeakeasyBase {
    contentType: string;
    listApisResponse?: shared.ListApisResponse;
    statusCode: number;
}
