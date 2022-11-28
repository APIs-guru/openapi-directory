import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Keyword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_types" })
  entityTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=entity_uris" })
  entityUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=keyword_id" })
  keywordId?: string;

  @SpeakeasyMetadata({ data: "json, name=relevance" })
  relevance?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
