package operations

type RegistryUpdateAPISpecPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Spec    string `pathParam:"style=simple,explode=false,name=spec"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryUpdateAPISpecQueryParams struct {
	AllowMissing *string `queryParam:"style=form,explode=true,name=allow_missing"`
	UpdateMask   *string `queryParam:"style=form,explode=true,name=update_mask"`
}

type RegistryUpdateAPISpecRequest struct {
	PathParams  RegistryUpdateAPISpecPathParams
	QueryParams RegistryUpdateAPISpecQueryParams
	Request     interface{} `request:"mediaType=application/json"`
}

type RegistryUpdateAPISpecResponse struct {
	APISpec     *interface{}
	ContentType string
	StatusCode  int64
}
