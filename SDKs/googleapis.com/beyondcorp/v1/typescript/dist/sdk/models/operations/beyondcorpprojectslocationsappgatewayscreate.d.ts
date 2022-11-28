import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppGatewaysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppGatewaysCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    appGatewayId?: string;
    callback?: string;
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
export declare class BeyondcorpProjectsLocationsAppGatewaysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppGatewaysCreateRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppGatewaysCreatePathParams;
    queryParams: BeyondcorpProjectsLocationsAppGatewaysCreateQueryParams;
    request?: shared.AppGatewayInput;
    security: BeyondcorpProjectsLocationsAppGatewaysCreateSecurity;
}
export declare class BeyondcorpProjectsLocationsAppGatewaysCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
