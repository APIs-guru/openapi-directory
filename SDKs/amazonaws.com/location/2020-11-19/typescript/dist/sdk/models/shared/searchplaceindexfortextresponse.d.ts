import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchForTextResult } from "./searchfortextresult";
import { SearchPlaceIndexForTextSummary } from "./searchplaceindexfortextsummary";
export declare class SearchPlaceIndexForTextResponse extends SpeakeasyBase {
    results: SearchForTextResult[];
    summary: SearchPlaceIndexForTextSummary;
}
