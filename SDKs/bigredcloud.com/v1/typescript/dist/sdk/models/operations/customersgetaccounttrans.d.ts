import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersGetAccountTransPathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class CustomersGetAccountTransRequest extends SpeakeasyBase {
    pathParams: CustomersGetAccountTransPathParams;
}
export declare class CustomersGetAccountTransResponse extends SpeakeasyBase {
    accountTranDtos?: shared.AccountTranDto[];
    contentType: string;
    statusCode: number;
}
