import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResult } from "./searchresult";



export class PackageSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=package" })
  package: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SearchResult })
  results: SearchResult[];
}
