import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";
export declare class ListEngagementsRequest extends SpeakeasyBase {
    incidentId?: string;
    maxResults?: number;
    nextToken?: string;
    timeRangeValue?: TimeRange;
}
