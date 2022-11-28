import { SpeakeasyBase } from "../../../internal/utils";
import { AccountingCustomer } from "./accountingcustomer";
export declare class GetCustomerResponse extends SpeakeasyBase {
    data: AccountingCustomer;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
