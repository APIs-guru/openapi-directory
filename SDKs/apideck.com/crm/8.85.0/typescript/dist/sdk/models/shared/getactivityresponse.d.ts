import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
export declare class GetActivityResponse extends SpeakeasyBase {
    data: Activity;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
