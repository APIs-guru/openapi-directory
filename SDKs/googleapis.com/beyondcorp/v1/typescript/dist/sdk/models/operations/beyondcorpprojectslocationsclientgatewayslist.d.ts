import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientGatewaysListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsClientGatewaysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientGatewaysListPathParams;
    queryParams: BeyondcorpProjectsLocationsClientGatewaysListQueryParams;
    security: BeyondcorpProjectsLocationsClientGatewaysListSecurity;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysListResponse extends SpeakeasyBase {
    contentType: string;
    listClientGatewaysResponse?: shared.ListClientGatewaysResponse;
    statusCode: number;
}
