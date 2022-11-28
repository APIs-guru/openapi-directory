import { SpeakeasyBase } from "../../../internal/utils";
import { Tender } from "./tender";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetTendersResponse extends SpeakeasyBase {
    data: Tender[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
