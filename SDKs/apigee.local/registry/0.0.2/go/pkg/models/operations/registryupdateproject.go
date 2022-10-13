package operations

type RegistryUpdateProjectPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type RegistryUpdateProjectQueryParams struct {
	UpdateMask *string `queryParam:"style=form,explode=true,name=update_mask"`
}

type RegistryUpdateProjectRequest struct {
	PathParams  RegistryUpdateProjectPathParams
	QueryParams RegistryUpdateProjectQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type RegistryUpdateProjectResponse struct {
	ContentType string
	Project     *interface{}
	StatusCode  int64
}
