import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FetchBoundaryByIdPathParams extends SpeakeasyBase {
    boundaryId: string;
}
export declare class FetchBoundaryByIdSecurityOption1 extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class FetchBoundaryByIdSecurityOption2 extends SpeakeasyBase {
    oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchBoundaryByIdSecurity extends SpeakeasyBase {
    option1?: FetchBoundaryByIdSecurityOption1;
    option2?: FetchBoundaryByIdSecurityOption2;
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
