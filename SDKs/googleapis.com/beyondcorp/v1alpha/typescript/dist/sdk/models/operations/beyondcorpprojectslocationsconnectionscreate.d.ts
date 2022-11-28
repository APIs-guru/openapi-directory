import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsConnectionsCreateQueryParams extends SpeakeasyBase {
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
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class BeyondcorpProjectsLocationsConnectionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectionsCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsConnectionsCreateQueryParams;
    request?: shared.ConnectionInput;
    security: BeyondcorpProjectsLocationsConnectionsCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
