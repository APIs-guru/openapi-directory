import { SpeakeasyBase } from "../../../internal/utils";
import { HrisJob } from "./hrisjob";
export declare class GetHrisJobResponse extends SpeakeasyBase {
    data: HrisJob;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
