import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum BeyondcorpProjectsLocationsOperationsGetViewEnum {
    InsightViewUnspecified = "INSIGHT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class BeyondcorpProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BeyondcorpProjectsLocationsOperationsGetViewEnum;
}
export declare class BeyondcorpProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsOperationsGetPathParams;
    queryParams: BeyondcorpProjectsLocationsOperationsGetQueryParams;
    security: BeyondcorpProjectsLocationsOperationsGetSecurity;
}
export declare class BeyondcorpProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
