import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeeSchedules } from "./employeeschedules";
export declare class GetEmployeeSchedulesResponse extends SpeakeasyBase {
    data: EmployeeSchedules;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
