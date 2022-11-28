import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountDeleteSessionPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class AccountDeleteSessionSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountDeleteSessionRequest extends SpeakeasyBase {
    pathParams: AccountDeleteSessionPathParams;
    security: AccountDeleteSessionSecurity;
}
export declare class AccountDeleteSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
