import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Keyword extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_types" })
  entityTypes?: string[];

  @Metadata({ data: "json, name=entity_uris" })
  entityUris?: string[];

  @Metadata({ data: "json, name=keyword_id" })
  keywordId?: string;

  @Metadata({ data: "json, name=relevance" })
  relevance?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
