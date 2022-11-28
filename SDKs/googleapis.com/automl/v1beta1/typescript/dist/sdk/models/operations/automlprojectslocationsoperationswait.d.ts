import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsOperationsWaitPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsOperationsWaitQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsOperationsWaitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsOperationsWaitRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsOperationsWaitPathParams;
    queryParams: AutomlProjectsLocationsOperationsWaitQueryParams;
    request?: shared.WaitOperationRequest;
    security: AutomlProjectsLocationsOperationsWaitSecurity;
}
export declare class AutomlProjectsLocationsOperationsWaitResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
