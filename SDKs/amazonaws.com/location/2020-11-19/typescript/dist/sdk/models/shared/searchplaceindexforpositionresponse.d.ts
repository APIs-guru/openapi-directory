import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchForPositionResult } from "./searchforpositionresult";
import { SearchPlaceIndexForPositionSummary } from "./searchplaceindexforpositionsummary";
export declare class SearchPlaceIndexForPositionResponse extends SpeakeasyBase {
    results: SearchForPositionResult[];
    summary: SearchPlaceIndexForPositionSummary;
}
