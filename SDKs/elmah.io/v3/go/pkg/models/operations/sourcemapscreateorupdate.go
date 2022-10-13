package operations

type SourceMapsCreateOrUpdatePathParams struct {
	LogID string `pathParam:"style=simple,explode=false,name=logId"`
}

type SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript struct {
	MinifiedJavaScript string `multipartForm:"name=MinifiedJavaScript"`
	Content            []byte `multipartForm:"content"`
}

type SourceMapsCreateOrUpdateRequestBodySourceMap struct {
	SourceMap string `multipartForm:"name=SourceMap"`
	Content   []byte `multipartForm:"content"`
}

type SourceMapsCreateOrUpdateRequestBody struct {
	MinifiedJavaScript SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript `multipartForm:"file"`
	Path               string                                                `multipartForm:"name=Path"`
	SourceMap          SourceMapsCreateOrUpdateRequestBodySourceMap          `multipartForm:"file"`
}

type SourceMapsCreateOrUpdateRequest struct {
	PathParams SourceMapsCreateOrUpdatePathParams
	Request    SourceMapsCreateOrUpdateRequestBody `request:"mediaType=multipart/form-data"`
}

type SourceMapsCreateOrUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
