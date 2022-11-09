import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersUpdatePrefsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersUpdatePrefsRequestBody extends SpeakeasyBase {
    prefs: Map<string, any>;
}
export declare class UsersUpdatePrefsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersUpdatePrefsRequest extends SpeakeasyBase {
    pathParams: UsersUpdatePrefsPathParams;
    request?: UsersUpdatePrefsRequestBody;
    security: UsersUpdatePrefsSecurity;
}
export declare class UsersUpdatePrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preferences?: Map<string, any>;
}
