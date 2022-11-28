import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsResetTokenPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class AppsResetTokenRequestBody extends SpeakeasyBase {
    accessToken: string;
}
export declare class AppsResetTokenRequest extends SpeakeasyBase {
    pathParams: AppsResetTokenPathParams;
    request?: AppsResetTokenRequestBody;
}
export declare class AppsResetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
    validationError?: shared.ValidationError;
}
