import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BeyondcorpProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
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
export declare class BeyondcorpProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsOperationsDeletePathParams;
    queryParams: BeyondcorpProjectsLocationsOperationsDeleteQueryParams;
    security: BeyondcorpProjectsLocationsOperationsDeleteSecurity;
}
export declare class BeyondcorpProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
