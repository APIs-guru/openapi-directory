import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    security: GetAccountSecurity;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    account?: shared.Account;
    notFound?: shared.NotFound;
}
