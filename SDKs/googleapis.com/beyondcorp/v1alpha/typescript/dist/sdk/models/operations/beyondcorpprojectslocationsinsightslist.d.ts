import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsInsightsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum BeyondcorpProjectsLocationsInsightsListViewEnum {
    InsightViewUnspecified = "INSIGHT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class BeyondcorpProjectsLocationsInsightsListQueryParams extends SpeakeasyBase {
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
    view?: BeyondcorpProjectsLocationsInsightsListViewEnum;
}
export declare class BeyondcorpProjectsLocationsInsightsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsInsightsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsInsightsListPathParams;
    queryParams: BeyondcorpProjectsLocationsInsightsListQueryParams;
    security: BeyondcorpProjectsLocationsInsightsListSecurity;
}
export declare class BeyondcorpProjectsLocationsInsightsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse?: shared.GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse;
    statusCode: number;
}
