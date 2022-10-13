package shared

type DialogAction struct {
	SlotToElicit *string              `json:"slotToElicit"`
	Type         DialogActionTypeEnum `json:"type"`
}
