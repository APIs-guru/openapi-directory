import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Opportunity } from "./opportunity";
export declare class GetOpportunityResponse extends SpeakeasyBase {
    data: Opportunity;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
