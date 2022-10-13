package shared

type AttachmentContent struct {
	Hash     *string                 `json:"Hash"`
	HashType *AttachmentHashTypeEnum `json:"HashType"`
	Name     *string                 `json:"Name"`
	Size     *int64                  `json:"Size"`
	URL      *string                 `json:"Url"`
}
