import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetPipelinesResponse extends SpeakeasyBase {
    data: Pipeline[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
