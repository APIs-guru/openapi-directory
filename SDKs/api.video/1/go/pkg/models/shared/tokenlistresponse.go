package shared

type TokenListResponse struct {
	Data       []UploadToken `json:"data"`
	Pagination Pagination    `json:"pagination"`
}
