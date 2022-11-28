import { SpeakeasyBase } from "../../../internal/utils";
import { ResponsePlanSummary } from "./responseplansummary";
export declare class ListResponsePlansOutput extends SpeakeasyBase {
    nextToken?: string;
    responsePlanSummaries: ResponsePlanSummary[];
}
