import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsResetAuthorizationPathParams extends SpeakeasyBase {
    accessToken: string;
    clientId: string;
}
export declare class AppsResetAuthorizationRequest extends SpeakeasyBase {
    pathParams: AppsResetAuthorizationPathParams;
}
export declare class AppsResetAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
}
