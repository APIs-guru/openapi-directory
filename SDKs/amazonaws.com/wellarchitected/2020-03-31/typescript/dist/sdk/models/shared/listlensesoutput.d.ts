import { SpeakeasyBase } from "../../../internal/utils";
import { LensSummary } from "./lenssummary";
/**
 * Output of a list lenses call.
**/
export declare class ListLensesOutput extends SpeakeasyBase {
    lensSummaries?: LensSummary[];
    nextToken?: string;
}
