import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountCreateAnonymousSessionSecurity extends SpeakeasyBase {
    project: shared.SchemeProject;
}
export declare class AccountCreateAnonymousSessionRequest extends SpeakeasyBase {
    security: AccountCreateAnonymousSessionSecurity;
}
export declare class AccountCreateAnonymousSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    session?: shared.Session;
}
