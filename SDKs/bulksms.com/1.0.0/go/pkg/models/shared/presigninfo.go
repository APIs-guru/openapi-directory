package shared

type PreSignInfoFields struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type PreSignInfo struct {
	FetchURL *string             `json:"fetchUrl"`
	Fields   []PreSignInfoFields `json:"fields"`
	PutURL   *string             `json:"putUrl"`
}
