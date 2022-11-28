import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountDeleteSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    project: shared.SchemeProject;
}
export declare class AccountDeleteRequest extends SpeakeasyBase {
    security: AccountDeleteSecurity;
}
export declare class AccountDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
