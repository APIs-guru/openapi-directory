package shared

type APICoreRequestsPatchBody struct {
	Action *string `json:"Action" form:"name=Action"`
	ID     *int64  `json:"Id" form:"name=Id"`
}
