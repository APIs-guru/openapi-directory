package shared

type DeveloperComment struct {
	LastModified *Timestamp `json:"lastModified"`
	Text         *string    `json:"text"`
}
