import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchAutoCompleteResponseTerms extends SpeakeasyBase {
    count?: number;
    item?: string;
}
/**
 * Search auto complete query response
**/
export declare class SearchAutoCompleteResponse extends SpeakeasyBase {
    terms?: SearchAutoCompleteResponseTerms[];
}
