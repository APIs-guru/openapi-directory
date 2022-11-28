package shared

type ForumPostSearchResponse struct {
	Authors                      []UserGeneralUser
	AvailablePages               *int32
	Groups                       []GroupsV2GroupResponse
	HasMore                      *bool
	Polls                        []ForumPollResponse
	Query                        *QueriesPagedQuery
	RecruitmentDetails           []ForumForumRecruitmentDetail
	RelatedPosts                 []ForumPostResponse
	ReplacementContinuationToken *string
	Results                      []ForumPostResponse
	SearchedTags                 []TagsModelsContractsTagResponse
	TotalResults                 *int32
	UseTotalResults              *bool
}
