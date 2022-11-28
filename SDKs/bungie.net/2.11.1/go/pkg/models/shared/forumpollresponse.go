package shared

type ForumPollResponse struct {
	Results    []ForumPollResult
	TopicID    *int64
	TotalVotes *int32
}
