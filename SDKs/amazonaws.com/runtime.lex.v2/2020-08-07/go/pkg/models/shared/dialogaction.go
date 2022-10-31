package shared

type DialogAction struct {
	SlotToElicit *string              `json:"slotToElicit,omitempty"`
	Type         DialogActionTypeEnum `json:"type"`
}
