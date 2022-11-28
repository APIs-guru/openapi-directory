import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsDeletePathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsDeleteQueryParams;
    security: BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
