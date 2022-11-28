import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
/**
 * Code Search Result Item
**/
export declare class CodeSearchResultItem extends SpeakeasyBase {
    fileSize?: number;
    gitUrl: string;
    htmlUrl: string;
    language?: string;
    lastModifiedAt?: Date;
    lineNumbers?: string[];
    name: string;
    path: string;
    repository: MinimalRepository;
    score: number;
    sha: string;
    textMatches?: SearchResultTextMatches[];
    url: string;
}
