import { SpeakeasyBase } from "../../../internal/utils";
import { Department } from "./department";
export declare class GetDepartmentResponse extends SpeakeasyBase {
    data: Department;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
