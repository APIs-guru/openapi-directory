import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResult } from "./searchresult";


export class PackageSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=package" })
  package: string;

  @Metadata({ data: "json, name=results", elemType: shared.SearchResult })
  results: SearchResult[];
}
