import { SpeakeasyBase } from "../../../internal/utils";
import { Opportunity } from "./opportunity";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetOpportunitiesResponse extends SpeakeasyBase {
    data: Opportunity[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
