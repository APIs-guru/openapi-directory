import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeePayroll } from "./employeepayroll";
export declare class GetEmployeePayrollResponse extends SpeakeasyBase {
    data: EmployeePayroll;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
