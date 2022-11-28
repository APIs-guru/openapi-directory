import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsClientGatewaysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientGatewayId?: string;
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
export declare class BeyondcorpProjectsLocationsClientGatewaysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsClientGatewaysCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsClientGatewaysCreateQueryParams;
    request?: shared.ClientGatewayInput;
    security: BeyondcorpProjectsLocationsClientGatewaysCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsClientGatewaysCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
