import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsDeleteAuthorizationPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class AppsDeleteAuthorizationRequestBody extends SpeakeasyBase {
    accessToken?: string;
}
export declare class AppsDeleteAuthorizationRequest extends SpeakeasyBase {
    pathParams: AppsDeleteAuthorizationPathParams;
    request?: AppsDeleteAuthorizationRequestBody;
}
export declare class AppsDeleteAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationError?: shared.ValidationError;
}
