import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountUpdatePrefsRequestBody extends SpeakeasyBase {
    prefs: Map<string, any>;
}
export declare class AccountUpdatePrefsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountUpdatePrefsRequest extends SpeakeasyBase {
    request?: AccountUpdatePrefsRequestBody;
    security: AccountUpdatePrefsSecurity;
}
export declare class AccountUpdatePrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
