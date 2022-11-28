import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsQueryParams extends SpeakeasyBase {
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
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsPathParams;
    queryParams: ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsQueryParams;
    security: ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisVersionsSpecsListRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    listApiSpecRevisionsResponse?: shared.ListApiSpecRevisionsResponse;
    statusCode: number;
}
