import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchResult
/** 
 * A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
**/
export class SearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context: string;

  @SpeakeasyMetadata({ data: "json, name=context_after" })
  contextAfter?: string[];

  @SpeakeasyMetadata({ data: "json, name=context_before" })
  contextBefore?: string[];

  @SpeakeasyMetadata({ data: "json, name=line" })
  line: number;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
