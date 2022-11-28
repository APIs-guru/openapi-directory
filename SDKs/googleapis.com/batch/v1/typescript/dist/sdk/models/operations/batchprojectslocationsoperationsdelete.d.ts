import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BatchProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    reason?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BatchProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsOperationsDeletePathParams;
    queryParams: BatchProjectsLocationsOperationsDeleteQueryParams;
    security: BatchProjectsLocationsOperationsDeleteSecurity;
}
export declare class BatchProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
