package shared

type APICoreRequestsPermissionPatchRequest struct {
	Action *string `json:"Action" form:"name=Action"`
	ID     *int64  `json:"Id" form:"name=Id"`
	Verb   *string `json:"Verb" form:"name=Verb"`
}
