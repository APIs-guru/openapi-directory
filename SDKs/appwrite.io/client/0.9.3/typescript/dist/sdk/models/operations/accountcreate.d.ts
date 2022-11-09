import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountCreateRequestBody extends SpeakeasyBase {
    email: string;
    name?: string;
    password: string;
}
export declare class AccountCreateSecurity extends SpeakeasyBase {
    project: shared.SchemeProject;
}
export declare class AccountCreateRequest extends SpeakeasyBase {
    request?: AccountCreateRequestBody;
    security: AccountCreateSecurity;
}
export declare class AccountCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
