package shared

type ForumForumRecruitmentDetail struct {
	Fireteam             []UserGeneralUser
	Approved             *bool
	ConversationID       *int64
	Intensity            *int64
	KickedPlayerIds      []int64
	MicrophoneRequired   *bool
	PlayerSlotsRemaining *int32
	PlayerSlotsTotal     *int32
	Tone                 *int64
	TopicID              *int64
}
