import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionOperationsDeletePathParams;
    queryParams: BaremetalsolutionOperationsDeleteQueryParams;
    security: BaremetalsolutionOperationsDeleteSecurity;
}
export declare class BaremetalsolutionOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
