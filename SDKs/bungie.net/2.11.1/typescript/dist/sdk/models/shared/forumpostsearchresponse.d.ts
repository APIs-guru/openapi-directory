import { SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
import { GroupsV2GroupResponse } from "./groupsv2groupresponse";
import { ForumPollResponse } from "./forumpollresponse";
import { QueriesPagedQuery } from "./queriespagedquery";
import { ForumForumRecruitmentDetail } from "./forumforumrecruitmentdetail";
import { ForumPostResponse } from "./forumpostresponse";
import { TagsModelsContractsTagResponse } from "./tagsmodelscontractstagresponse";
export declare class ForumPostSearchResponse extends SpeakeasyBase {
    authors?: UserGeneralUser[];
    availablePages?: number;
    groups?: GroupsV2GroupResponse[];
    hasMore?: boolean;
    polls?: ForumPollResponse[];
    query?: QueriesPagedQuery;
    recruitmentDetails?: ForumForumRecruitmentDetail[];
    relatedPosts?: ForumPostResponse[];
    replacementContinuationToken?: string;
    results?: ForumPostResponse[];
    searchedTags?: TagsModelsContractsTagResponse[];
    totalResults?: number;
    useTotalResults?: boolean;
}
