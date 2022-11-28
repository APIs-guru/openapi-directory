import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchResultTextMatchesMatches extends SpeakeasyBase {
    indices?: number[];
    text?: string;
}
export declare class SearchResultTextMatches extends SpeakeasyBase {
    fragment?: string;
    matches?: SearchResultTextMatchesMatches[];
    objectType?: string;
    objectUrl?: string;
    property?: string;
}
