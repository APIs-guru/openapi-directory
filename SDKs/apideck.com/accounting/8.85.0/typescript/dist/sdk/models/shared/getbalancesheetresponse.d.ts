import { SpeakeasyBase } from "../../../internal/utils";
import { BalanceSheet } from "./balancesheet";
export declare class GetBalanceSheetResponse extends SpeakeasyBase {
    data: BalanceSheet;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
