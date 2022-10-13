package shared

type APICoreRequestsConversionPatchBody struct {
	Action    *string `json:"Action" form:"name=Action"`
	ID        *int64  `json:"Id" form:"name=Id"`
	ReplaceID *int64  `json:"ReplaceId" form:"name=ReplaceId"`
}
