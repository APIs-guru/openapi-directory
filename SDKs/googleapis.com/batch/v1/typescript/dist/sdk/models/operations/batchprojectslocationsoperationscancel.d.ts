import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BatchProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class BatchProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsOperationsCancelPathParams;
    queryParams: BatchProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: BatchProjectsLocationsOperationsCancelSecurity;
}
export declare class BatchProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
