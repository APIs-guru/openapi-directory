import { SpeakeasyBase } from "../../../internal/utils";
import { Lead } from "./lead";
export declare class GetLeadResponse extends SpeakeasyBase {
    data: Lead;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
