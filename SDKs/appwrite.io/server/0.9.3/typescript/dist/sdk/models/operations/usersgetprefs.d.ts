import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersGetPrefsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersGetPrefsSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersGetPrefsRequest extends SpeakeasyBase {
    pathParams: UsersGetPrefsPathParams;
    security: UsersGetPrefsSecurity;
}
export declare class UsersGetPrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preferences?: Map<string, any>;
}
