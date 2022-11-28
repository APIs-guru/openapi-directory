import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetPrefsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountGetPrefsRequest extends SpeakeasyBase {
    security: AccountGetPrefsSecurity;
}
export declare class AccountGetPrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preferences?: Map<string, any>;
}
