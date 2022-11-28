import { SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
export declare class GetEmployeeResponse extends SpeakeasyBase {
    data: Employee;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
