import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchResult
/** 
 * A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
**/
export class SearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context: string;

  @Metadata({ data: "json, name=context_after" })
  contextAfter?: string[];

  @Metadata({ data: "json, name=context_before" })
  contextBefore?: string[];

  @Metadata({ data: "json, name=line" })
  line: number;

  @Metadata({ data: "json, name=package" })
  package: string;

  @Metadata({ data: "json, name=path" })
  path: string;
}
