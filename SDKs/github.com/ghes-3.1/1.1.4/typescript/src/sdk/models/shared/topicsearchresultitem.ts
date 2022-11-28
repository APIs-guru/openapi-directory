import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResultTextMatches } from "./searchresulttextmatches";



export class TopicSearchResultItemAliasesTopicRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=relation_type" })
  relationType?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_id" })
  topicId?: number;
}


export class TopicSearchResultItemAliases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic_relation" })
  topicRelation?: TopicSearchResultItemAliasesTopicRelation;
}


export class TopicSearchResultItemRelatedTopicRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=relation_type" })
  relationType?: string;

  @SpeakeasyMetadata({ data: "json, name=topic_id" })
  topicId?: number;
}


export class TopicSearchResultItemRelated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic_relation" })
  topicRelation?: TopicSearchResultItemRelatedTopicRelation;
}


// TopicSearchResultItem
/** 
 * Topic Search Result Item
**/
export class TopicSearchResultItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases", elemType: TopicSearchResultItemAliases })
  aliases?: TopicSearchResultItemAliases[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: string;

  @SpeakeasyMetadata({ data: "json, name=curated" })
  curated: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=featured" })
  featured: boolean;

  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=related", elemType: TopicSearchResultItemRelated })
  related?: TopicSearchResultItemRelated[];

  @SpeakeasyMetadata({ data: "json, name=released" })
  released: string;

  @SpeakeasyMetadata({ data: "json, name=repository_count" })
  repositoryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=short_description" })
  shortDescription: string;

  @SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
