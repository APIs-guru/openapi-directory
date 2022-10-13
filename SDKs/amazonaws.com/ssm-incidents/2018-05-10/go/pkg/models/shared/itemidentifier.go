package shared

type ItemIdentifier struct {
	Type  ItemTypeEnum `json:"type"`
	Value ItemValue    `json:"value"`
}
