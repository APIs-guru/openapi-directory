import { SpeakeasyBase } from "../../../internal/utils";
import { Payroll } from "./payroll";
export declare class GetPayrollsResponse extends SpeakeasyBase {
    data: Payroll[];
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
