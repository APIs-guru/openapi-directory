import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchResultTextMatchesMatches extends SpeakeasyBase {
  @Metadata({ data: "json, name=indices" })
  indices?: number[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class SearchResultTextMatches extends SpeakeasyBase {
  @Metadata({ data: "json, name=fragment" })
  fragment?: string;

  @Metadata({ data: "json, name=matches", elemType: shared.SearchResultTextMatchesMatches })
  matches?: SearchResultTextMatchesMatches[];

  @Metadata({ data: "json, name=object_type" })
  objectType?: string;

  @Metadata({ data: "json, name=object_url" })
  objectUrl?: string;

  @Metadata({ data: "json, name=property" })
  property?: string;
}
