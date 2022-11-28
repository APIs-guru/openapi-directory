import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppGatewaysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppGatewaysListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsAppGatewaysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppGatewaysListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppGatewaysListPathParams;
    queryParams: BeyondcorpProjectsLocationsAppGatewaysListQueryParams;
    security: BeyondcorpProjectsLocationsAppGatewaysListSecurity;
}
export declare class BeyondcorpProjectsLocationsAppGatewaysListResponse extends SpeakeasyBase {
    contentType: string;
    listAppGatewaysResponse?: shared.ListAppGatewaysResponse;
    statusCode: number;
}
