package shared

type APICoreRequestsPermissionPatchRequest struct {
	Action *string `json:"Action,omitempty" form:"name=Action"`
	ID     *int64  `json:"Id,omitempty" form:"name=Id"`
	Verb   *string `json:"Verb,omitempty" form:"name=Verb"`
}
