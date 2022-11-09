import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams extends SpeakeasyBase {
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
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialPathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialQueryParams;
    request?: shared.ConnectionCredential;
    security: BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
