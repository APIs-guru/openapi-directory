import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsCreateSecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsCreatePathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams;
    request?: shared.Connection;
    security: BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsCreateResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
}
