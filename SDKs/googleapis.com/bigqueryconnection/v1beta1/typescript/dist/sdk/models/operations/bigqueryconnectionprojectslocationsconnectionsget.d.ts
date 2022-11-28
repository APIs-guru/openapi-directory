import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetQueryParams extends SpeakeasyBase {
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
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetSecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsGetPathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsGetQueryParams;
    security: BigqueryconnectionProjectsLocationsConnectionsGetSecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsGetResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
}
