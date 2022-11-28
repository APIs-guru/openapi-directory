import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeePayrolls } from "./employeepayrolls";
export declare class GetEmployeePayrollsResponse extends SpeakeasyBase {
    data: EmployeePayrolls;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
