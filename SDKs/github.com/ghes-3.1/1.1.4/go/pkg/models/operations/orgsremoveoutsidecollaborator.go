package operations

type OrgsRemoveOutsideCollaboratorPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsRemoveOutsideCollaboratorRequest struct {
	PathParams OrgsRemoveOutsideCollaboratorPathParams
}

type OrgsRemoveOutsideCollaborator422ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type OrgsRemoveOutsideCollaboratorResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	OrgsRemoveOutsideCollaborator422ApplicationJSONObject *OrgsRemoveOutsideCollaborator422ApplicationJSON
}
