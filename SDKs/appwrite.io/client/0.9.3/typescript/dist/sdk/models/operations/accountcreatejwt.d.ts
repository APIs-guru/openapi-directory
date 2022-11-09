import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountCreateJwtSecurity extends SpeakeasyBase {
    project: shared.SchemeProject;
}
export declare class AccountCreateJwtRequest extends SpeakeasyBase {
    security: AccountCreateJwtSecurity;
}
export declare class AccountCreateJwtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    jwt?: shared.Jwt;
}
