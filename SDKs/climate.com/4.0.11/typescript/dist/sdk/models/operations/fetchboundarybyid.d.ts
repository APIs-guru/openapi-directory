import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchBoundaryByIdPathParams extends SpeakeasyBase {
    boundaryId: string;
}
export declare class FetchBoundaryByIdSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchBoundaryByIdRequest extends SpeakeasyBase {
    pathParams: FetchBoundaryByIdPathParams;
    security: FetchBoundaryByIdSecurity;
}
export declare class FetchBoundaryByIdResponse extends SpeakeasyBase {
    boundary?: any;
    contentType: string;
    error?: shared.Error;
    headers: Map<string, string[]>;
    statusCode: number;
}
