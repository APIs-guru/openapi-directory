import { SpeakeasyBase } from "../../../internal/utils";
import { ResultField } from "./resultfield";
import { QueryStatistics } from "./querystatistics";
import { QueryStatusEnum } from "./querystatusenum";
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    results?: ResultField[][];
    statistics?: QueryStatistics;
    status?: QueryStatusEnum;
}
