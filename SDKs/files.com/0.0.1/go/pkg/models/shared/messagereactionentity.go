package shared

type MessageReactionEntity struct {
	Emoji *string `json:"emoji"`
	ID    *int32  `json:"id"`
}
