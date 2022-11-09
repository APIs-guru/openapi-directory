import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisDeploymentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsListRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisDeploymentsListPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisDeploymentsListQueryParams;
    security: ApigeeregistryProjectsLocationsApisDeploymentsListSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    listApiDeploymentsResponse?: shared.ListApiDeploymentsResponse;
    statusCode: number;
}
