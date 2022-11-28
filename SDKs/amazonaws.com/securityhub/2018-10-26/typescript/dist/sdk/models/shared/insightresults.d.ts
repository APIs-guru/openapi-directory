import { SpeakeasyBase } from "../../../internal/utils";
import { InsightResultValue } from "./insightresultvalue";
/**
 * The insight results returned by the <code>GetInsightResults</code> operation.
**/
export declare class InsightResults extends SpeakeasyBase {
    groupByAttribute: string;
    insightArn: string;
    resultValues: InsightResultValue[];
}
