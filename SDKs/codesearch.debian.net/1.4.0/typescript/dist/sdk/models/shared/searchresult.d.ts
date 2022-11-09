import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
**/
export declare class SearchResult extends SpeakeasyBase {
    context: string;
    contextAfter?: string[];
    contextBefore?: string[];
    line: number;
    package: string;
    path: string;
}
