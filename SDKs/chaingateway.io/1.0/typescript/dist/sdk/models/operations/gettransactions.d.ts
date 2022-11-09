import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTransactionsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    headers: GetTransactionsHeaders;
    request: shared.GetTransactionsRequest;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTransactions?: shared.GetTransactions;
}
