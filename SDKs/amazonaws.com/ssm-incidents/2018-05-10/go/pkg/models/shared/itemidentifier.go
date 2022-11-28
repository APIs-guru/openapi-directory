package shared

// ItemIdentifier
// Details and type of a related item.
type ItemIdentifier struct {
	Type  ItemTypeEnum `json:"type"`
	Value ItemValue    `json:"value"`
}
