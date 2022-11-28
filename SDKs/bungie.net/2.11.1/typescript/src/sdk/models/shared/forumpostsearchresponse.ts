import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
import { GroupsV2GroupResponse } from "./groupsv2groupresponse";
import { ForumPollResponse } from "./forumpollresponse";
import { QueriesPagedQuery } from "./queriespagedquery";
import { ForumForumRecruitmentDetail } from "./forumforumrecruitmentdetail";
import { ForumPostResponse } from "./forumpostresponse";
import { TagsModelsContractsTagResponse } from "./tagsmodelscontractstagresponse";



export class ForumPostSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: UserGeneralUser })
  authors?: UserGeneralUser[];

  @SpeakeasyMetadata()
  availablePages?: number;

  @SpeakeasyMetadata({ elemType: GroupsV2GroupResponse })
  groups?: GroupsV2GroupResponse[];

  @SpeakeasyMetadata()
  hasMore?: boolean;

  @SpeakeasyMetadata({ elemType: ForumPollResponse })
  polls?: ForumPollResponse[];

  @SpeakeasyMetadata()
  query?: QueriesPagedQuery;

  @SpeakeasyMetadata({ elemType: ForumForumRecruitmentDetail })
  recruitmentDetails?: ForumForumRecruitmentDetail[];

  @SpeakeasyMetadata({ elemType: ForumPostResponse })
  relatedPosts?: ForumPostResponse[];

  @SpeakeasyMetadata()
  replacementContinuationToken?: string;

  @SpeakeasyMetadata({ elemType: ForumPostResponse })
  results?: ForumPostResponse[];

  @SpeakeasyMetadata({ elemType: TagsModelsContractsTagResponse })
  searchedTags?: TagsModelsContractsTagResponse[];

  @SpeakeasyMetadata()
  totalResults?: number;

  @SpeakeasyMetadata()
  useTotalResults?: boolean;
}
