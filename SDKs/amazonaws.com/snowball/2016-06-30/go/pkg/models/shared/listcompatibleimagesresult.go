package shared

type ListCompatibleImagesResult struct {
	CompatibleImages []CompatibleImage `json:"CompatibleImages"`
	NextToken        *string           `json:"NextToken"`
}
