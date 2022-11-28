import { SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetEmployeesResponse extends SpeakeasyBase {
    data: Employee[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
