import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountCreateSessionRequestBody extends SpeakeasyBase {
    email: string;
    password: string;
}
export declare class AccountCreateSessionSecurity extends SpeakeasyBase {
    project: shared.SchemeProject;
}
export declare class AccountCreateSessionRequest extends SpeakeasyBase {
    request?: AccountCreateSessionRequestBody;
    security: AccountCreateSessionSecurity;
}
export declare class AccountCreateSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    session?: shared.Session;
}
