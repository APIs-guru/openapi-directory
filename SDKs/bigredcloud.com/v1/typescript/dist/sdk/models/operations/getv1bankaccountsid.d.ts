import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1BankAccountsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1BankAccountsIdRequest extends SpeakeasyBase {
    pathParams: GetV1BankAccountsIdPathParams;
}
export declare class GetV1BankAccountsIdResponse extends SpeakeasyBase {
    bankAccountDto?: shared.BankAccountDto;
    contentType: string;
    statusCode: number;
}
