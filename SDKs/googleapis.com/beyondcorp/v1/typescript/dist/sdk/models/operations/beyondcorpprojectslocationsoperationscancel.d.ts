import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BeyondcorpProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsOperationsCancelPathParams;
    queryParams: BeyondcorpProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: BeyondcorpProjectsLocationsOperationsCancelSecurity;
}
export declare class BeyondcorpProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
