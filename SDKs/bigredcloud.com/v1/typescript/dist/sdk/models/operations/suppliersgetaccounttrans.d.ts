import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersGetAccountTransPathParams extends SpeakeasyBase {
    itemId: number;
}
export declare class SuppliersGetAccountTransRequest extends SpeakeasyBase {
    pathParams: SuppliersGetAccountTransPathParams;
}
export declare class SuppliersGetAccountTransResponse extends SpeakeasyBase {
    accountTranDtos?: shared.AccountTranDto[];
    contentType: string;
    statusCode: number;
}
