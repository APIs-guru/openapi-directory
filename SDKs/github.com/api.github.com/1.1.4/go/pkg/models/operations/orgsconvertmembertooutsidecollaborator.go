package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsConvertMemberToOutsideCollaboratorPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type OrgsConvertMemberToOutsideCollaborator403ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type OrgsConvertMemberToOutsideCollaboratorRequest struct {
	PathParams OrgsConvertMemberToOutsideCollaboratorPathParams
}

type OrgsConvertMemberToOutsideCollaboratorResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	BasicError                                                     *shared.BasicError
	OrgsConvertMemberToOutsideCollaborator403ApplicationJSONObject *OrgsConvertMemberToOutsideCollaborator403ApplicationJSON
}
