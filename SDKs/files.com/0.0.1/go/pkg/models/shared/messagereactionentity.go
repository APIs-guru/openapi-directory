package shared

type MessageReactionEntity struct {
	Emoji *string `json:"emoji,omitempty"`
	ID    *int32  `json:"id,omitempty"`
}
