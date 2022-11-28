import { SpeakeasyBase } from "../../../internal/utils";
import { MessageData } from "./messagedata";
import { MetricDataResult } from "./metricdataresult";
export declare class GetMetricDataOutput extends SpeakeasyBase {
    messages?: MessageData[];
    metricDataResults?: MetricDataResult[];
    nextToken?: string;
}
