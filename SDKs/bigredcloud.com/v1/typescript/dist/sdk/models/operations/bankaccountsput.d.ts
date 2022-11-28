import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankAccountsPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class BankAccountsPutRequest extends SpeakeasyBase {
    pathParams: BankAccountsPutPathParams;
    request: shared.BankAccountDto;
}
export declare class BankAccountsPutResponse extends SpeakeasyBase {
    bankAccountsPut200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
