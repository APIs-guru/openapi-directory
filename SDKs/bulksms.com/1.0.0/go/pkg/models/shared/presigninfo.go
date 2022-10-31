package shared

type PreSignInfoFields struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type PreSignInfo struct {
	FetchURL *string             `json:"fetchUrl,omitempty"`
	Fields   []PreSignInfoFields `json:"fields,omitempty"`
	PutURL   *string             `json:"putUrl,omitempty"`
}
