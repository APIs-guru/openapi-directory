import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SampledHttpRequest } from "./sampledhttprequest";
import { TimeWindow } from "./timewindow";
export declare class GetSampledRequestsResponse extends SpeakeasyBase {
    populationSize?: number;
    sampledRequests?: SampledHttpRequest[];
    timeWindow?: TimeWindow;
}
