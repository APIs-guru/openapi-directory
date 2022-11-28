import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StromkontoChoicesQueryParams extends SpeakeasyBase {
    account?: string;
}
export declare class StromkontoChoicesRequest extends SpeakeasyBase {
    queryParams: StromkontoChoicesQueryParams;
}
export declare class StromkontoChoicesResponse extends SpeakeasyBase {
    balances?: shared.Balance[];
    contentType: string;
    statusCode: number;
}
