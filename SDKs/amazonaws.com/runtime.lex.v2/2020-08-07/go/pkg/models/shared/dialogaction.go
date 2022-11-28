package shared

// DialogAction
// The next action that Amazon Lex V2 should take.
type DialogAction struct {
	SlotToElicit *string              `json:"slotToElicit,omitempty"`
	Type         DialogActionTypeEnum `json:"type"`
}
