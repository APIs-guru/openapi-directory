import { SpeakeasyBase } from "../../../internal/utils";
import { Department } from "./department";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetDepartmentsResponse extends SpeakeasyBase {
    data: Department[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
