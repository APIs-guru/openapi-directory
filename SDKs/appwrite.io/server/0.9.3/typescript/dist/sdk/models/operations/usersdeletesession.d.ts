import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersDeleteSessionPathParams extends SpeakeasyBase {
    sessionId: string;
    userId: string;
}
export declare class UsersDeleteSessionSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersDeleteSessionRequest extends SpeakeasyBase {
    pathParams: UsersDeleteSessionPathParams;
    security: UsersDeleteSessionSecurity;
}
export declare class UsersDeleteSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
