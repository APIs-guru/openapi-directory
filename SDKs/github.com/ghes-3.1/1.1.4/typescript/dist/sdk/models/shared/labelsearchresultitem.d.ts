import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResultTextMatches } from "./searchresulttextmatches";
/**
 * Label Search Result Item
**/
export declare class LabelSearchResultItem extends SpeakeasyBase {
    color: string;
    default: boolean;
    description: string;
    id: number;
    name: string;
    nodeId: string;
    score: number;
    textMatches?: SearchResultTextMatches[];
    url: string;
}
