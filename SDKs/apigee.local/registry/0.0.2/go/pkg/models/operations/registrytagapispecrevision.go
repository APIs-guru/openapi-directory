package operations

type RegistryTagAPISpecRevisionPathParams struct {
	API     string `pathParam:"style=simple,explode=false,name=api"`
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Spec    string `pathParam:"style=simple,explode=false,name=spec"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type RegistryTagAPISpecRevisionRequest struct {
	PathParams RegistryTagAPISpecRevisionPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type RegistryTagAPISpecRevisionResponse struct {
	APISpec     *interface{}
	ContentType string
	StatusCode  int64
}
