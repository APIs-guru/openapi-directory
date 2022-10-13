package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListCollaboratorsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsListCollaboratorsAffiliationEnum string

const (
	ProjectsListCollaboratorsAffiliationEnumOutside ProjectsListCollaboratorsAffiliationEnum = "outside"
	ProjectsListCollaboratorsAffiliationEnumDirect  ProjectsListCollaboratorsAffiliationEnum = "direct"
	ProjectsListCollaboratorsAffiliationEnumAll     ProjectsListCollaboratorsAffiliationEnum = "all"
)

type ProjectsListCollaboratorsQueryParams struct {
	Affiliation *ProjectsListCollaboratorsAffiliationEnum `queryParam:"style=form,explode=true,name=affiliation"`
	Page        *int64                                    `queryParam:"style=form,explode=true,name=page"`
	PerPage     *int64                                    `queryParam:"style=form,explode=true,name=per_page"`
}

type ProjectsListCollaboratorsRequest struct {
	PathParams  ProjectsListCollaboratorsPathParams
	QueryParams ProjectsListCollaboratorsQueryParams
}

type ProjectsListCollaborators415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ProjectsListCollaboratorsResponse struct {
	ContentType                                       string
	Headers                                           map[string][]string
	StatusCode                                        int64
	BasicError                                        *shared.BasicError
	ProjectsListCollaborators415ApplicationJSONObject *ProjectsListCollaborators415ApplicationJSON
	SimpleUsers                                       []shared.SimpleUser
	ValidationError                                   *shared.ValidationError
}
