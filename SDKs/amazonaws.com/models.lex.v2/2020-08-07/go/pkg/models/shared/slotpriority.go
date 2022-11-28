package shared

// SlotPriority
// Sets the priority that Amazon Lex should use when eliciting slot values from a user.
type SlotPriority struct {
	Priority int64  `json:"priority"`
	SlotID   string `json:"slotId"`
}
