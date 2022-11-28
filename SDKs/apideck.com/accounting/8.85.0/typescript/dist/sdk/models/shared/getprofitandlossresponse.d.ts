import { SpeakeasyBase } from "../../../internal/utils";
import { ProfitAndLoss } from "./profitandloss";
export declare class GetProfitAndLossResponse extends SpeakeasyBase {
    data: ProfitAndLoss;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
