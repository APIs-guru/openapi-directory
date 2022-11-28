import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountQueryParams extends SpeakeasyBase {
    accountId: number;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    pathParams: GetAccountPathParams;
    queryParams: GetAccountQueryParams;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    accountDetail?: shared.AccountDetail;
    contentType: string;
    statusCode: number;
}
