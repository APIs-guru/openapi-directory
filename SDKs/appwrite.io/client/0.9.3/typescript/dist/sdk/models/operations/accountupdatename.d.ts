import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountUpdateNameRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class AccountUpdateNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountUpdateNameRequest extends SpeakeasyBase {
    request?: AccountUpdateNameRequestBody;
    security: AccountUpdateNameSecurity;
}
export declare class AccountUpdateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
