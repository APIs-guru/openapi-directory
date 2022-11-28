import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsDeleteTokenPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class AppsDeleteTokenRequestBody extends SpeakeasyBase {
    accessToken: string;
}
export declare class AppsDeleteTokenRequest extends SpeakeasyBase {
    pathParams: AppsDeleteTokenPathParams;
    request?: AppsDeleteTokenRequestBody;
}
export declare class AppsDeleteTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationError?: shared.ValidationError;
}
