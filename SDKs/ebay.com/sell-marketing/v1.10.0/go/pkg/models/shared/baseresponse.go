package shared

type BaseResponse struct {
	Warnings []Error `json:"warnings"`
}
