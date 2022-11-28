import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsCheckTokenPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class AppsCheckTokenRequestBody extends SpeakeasyBase {
    accessToken: string;
}
export declare class AppsCheckTokenRequest extends SpeakeasyBase {
    pathParams: AppsCheckTokenPathParams;
    request?: AppsCheckTokenRequestBody;
}
export declare class AppsCheckTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authorization?: shared.Authorization;
    basicError?: shared.BasicError;
    validationError?: shared.ValidationError;
}
