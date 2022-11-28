import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    pathParams: GetAccountPathParams;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
