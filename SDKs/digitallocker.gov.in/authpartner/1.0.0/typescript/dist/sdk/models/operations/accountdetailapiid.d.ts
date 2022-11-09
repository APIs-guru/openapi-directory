import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountDetailApiIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class AccountDetailApiIdRequest extends SpeakeasyBase {
    security: AccountDetailApiIdSecurity;
}
export declare class AccountDetailApiId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class AccountDetailApiId500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class AccountDetailApiIdResponse extends SpeakeasyBase {
    accountDetailApiId401ApplicationJsonObject?: AccountDetailApiId401ApplicationJson;
    accountDetailApiId500ApplicationJsonObject?: AccountDetailApiId500ApplicationJson;
    contentType: string;
    sample?: any;
    statusCode: number;
}
