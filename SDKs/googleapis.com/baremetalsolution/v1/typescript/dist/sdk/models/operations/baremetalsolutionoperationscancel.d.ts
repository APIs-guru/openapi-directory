import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionOperationsCancelRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionOperationsCancelPathParams;
    queryParams: BaremetalsolutionOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: BaremetalsolutionOperationsCancelSecurity;
}
export declare class BaremetalsolutionOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
