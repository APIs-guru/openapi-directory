import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerSupportCustomer } from "./customersupportcustomer";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetCustomerSupportCustomersResponse extends SpeakeasyBase {
    data: CustomerSupportCustomer[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
