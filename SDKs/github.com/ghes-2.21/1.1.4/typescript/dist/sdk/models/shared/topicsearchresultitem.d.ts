import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResultTextMatches } from "./searchresulttextmatches";
export declare class TopicSearchResultItemAliasesTopicRelation extends SpeakeasyBase {
    id?: number;
    name?: string;
    relationType?: string;
    topicId?: number;
}
export declare class TopicSearchResultItemAliases extends SpeakeasyBase {
    topicRelation?: TopicSearchResultItemAliasesTopicRelation;
}
export declare class TopicSearchResultItemRelatedTopicRelation extends SpeakeasyBase {
    id?: number;
    name?: string;
    relationType?: string;
    topicId?: number;
}
export declare class TopicSearchResultItemRelated extends SpeakeasyBase {
    topicRelation?: TopicSearchResultItemRelatedTopicRelation;
}
/**
 * Topic Search Result Item
**/
export declare class TopicSearchResultItem extends SpeakeasyBase {
    aliases?: TopicSearchResultItemAliases[];
    createdAt: Date;
    createdBy: string;
    curated: boolean;
    description: string;
    displayName: string;
    featured: boolean;
    logoUrl?: string;
    name: string;
    related?: TopicSearchResultItemRelated[];
    released: string;
    repositoryCount?: number;
    score: number;
    shortDescription: string;
    textMatches?: SearchResultTextMatches[];
    updatedAt: Date;
}
