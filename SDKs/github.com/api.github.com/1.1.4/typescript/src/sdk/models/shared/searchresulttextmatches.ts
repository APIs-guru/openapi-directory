import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchResultTextMatchesMatches extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indices" })
  indices?: number[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class SearchResultTextMatches extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fragment" })
  fragment?: string;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: SearchResultTextMatchesMatches })
  matches?: SearchResultTextMatchesMatches[];

  @SpeakeasyMetadata({ data: "json, name=object_type" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=object_url" })
  objectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;
}
