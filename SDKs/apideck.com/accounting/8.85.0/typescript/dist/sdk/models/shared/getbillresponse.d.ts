import { SpeakeasyBase } from "../../../internal/utils";
import { Bill } from "./bill";
export declare class GetBillResponse extends SpeakeasyBase {
    data: Bill;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
