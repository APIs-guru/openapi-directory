import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponsePlanSummary } from "./responseplansummary";
export declare class ListResponsePlansOutput extends SpeakeasyBase {
    nextToken?: string;
    responsePlanSummaries: ResponsePlanSummary[];
}
