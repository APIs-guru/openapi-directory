import { SpeakeasyBase } from "../../../internal/utils";
import { OpsAggregator } from "./opsaggregator";
import { OpsFilter } from "./opsfilter";
import { OpsResultAttribute } from "./opsresultattribute";
export declare class GetOpsSummaryRequest extends SpeakeasyBase {
    aggregators?: OpsAggregator[];
    filters?: OpsFilter[];
    maxResults?: number;
    nextToken?: string;
    resultAttributes?: OpsResultAttribute[];
    syncName?: string;
}
