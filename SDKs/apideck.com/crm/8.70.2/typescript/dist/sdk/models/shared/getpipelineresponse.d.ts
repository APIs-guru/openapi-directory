import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Pipeline } from "./pipeline";
export declare class GetPipelineResponse extends SpeakeasyBase {
    data: Pipeline;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
