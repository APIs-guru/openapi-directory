import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResultTextMatches } from "./searchresulttextmatches";


export class TopicSearchResultItemAliasesTopicRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=relation_type" })
  relationType?: string;

  @Metadata({ data: "json, name=topic_id" })
  topicId?: number;
}


export class TopicSearchResultItemAliases extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic_relation" })
  topicRelation?: TopicSearchResultItemAliasesTopicRelation;
}


export class TopicSearchResultItemRelatedTopicRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=relation_type" })
  relationType?: string;

  @Metadata({ data: "json, name=topic_id" })
  topicId?: number;
}


export class TopicSearchResultItemRelated extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic_relation" })
  topicRelation?: TopicSearchResultItemRelatedTopicRelation;
}


// TopicSearchResultItem
/** 
 * Topic Search Result Item
**/
export class TopicSearchResultItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases", elemType: shared.TopicSearchResultItemAliases })
  aliases?: TopicSearchResultItemAliases[];

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy: string;

  @Metadata({ data: "json, name=curated" })
  curated: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=display_name" })
  displayName: string;

  @Metadata({ data: "json, name=featured" })
  featured: boolean;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=related", elemType: shared.TopicSearchResultItemRelated })
  related?: TopicSearchResultItemRelated[];

  @Metadata({ data: "json, name=released" })
  released: string;

  @Metadata({ data: "json, name=repository_count" })
  repositoryCount?: number;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=short_description" })
  shortDescription: string;

  @Metadata({ data: "json, name=text_matches", elemType: shared.SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
