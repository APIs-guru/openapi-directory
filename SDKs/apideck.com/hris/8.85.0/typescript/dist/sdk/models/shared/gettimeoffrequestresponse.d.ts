import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOffRequest } from "./timeoffrequest";
export declare class GetTimeOffRequestResponse extends SpeakeasyBase {
    data: TimeOffRequest;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
