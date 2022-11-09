import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountGetSessionPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class AccountGetSessionSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountGetSessionRequest extends SpeakeasyBase {
    pathParams: AccountGetSessionPathParams;
    security: AccountGetSessionSecurity;
}
export declare class AccountGetSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    session?: shared.Session;
}
