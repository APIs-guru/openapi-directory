import { SpeakeasyBase } from "../../../internal/utils";
import { OpsFilter } from "./opsfilter";
/**
 * One or more aggregators for viewing counts of OpsData using different dimensions such as <code>Source</code>, <code>CreatedTime</code>, or <code>Source and CreatedTime</code>, to name a few.
**/
export declare class OpsAggregator extends SpeakeasyBase {
    aggregatorType?: string;
    aggregators?: OpsAggregator[];
    attributeName?: string;
    filters?: OpsFilter[];
    typeName?: string;
    values?: Map<string, string>;
}
