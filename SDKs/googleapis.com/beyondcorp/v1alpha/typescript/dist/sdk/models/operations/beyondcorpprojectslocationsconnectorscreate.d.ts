import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectorsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsConnectorsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectorId?: string;
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
export declare class BeyondcorpProjectsLocationsConnectorsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectorsCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectorsCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsConnectorsCreateQueryParams;
    request?: shared.ConnectorInput;
    security: BeyondcorpProjectsLocationsConnectorsCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
