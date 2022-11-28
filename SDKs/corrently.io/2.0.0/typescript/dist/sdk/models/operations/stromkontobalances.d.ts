import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StromkontoBalancesQueryParams extends SpeakeasyBase {
    account?: string;
}
export declare class StromkontoBalancesRequest extends SpeakeasyBase {
    queryParams: StromkontoBalancesQueryParams;
}
export declare class StromkontoBalancesResponse extends SpeakeasyBase {
    balances?: shared.Balance[];
    contentType: string;
    statusCode: number;
}
