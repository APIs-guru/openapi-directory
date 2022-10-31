package operations

type PostStartExportTaskActionEnum string

const (
	PostStartExportTaskActionEnumStartExportTask PostStartExportTaskActionEnum = "StartExportTask"
)

type PostStartExportTaskVersionEnum string

const (
	PostStartExportTaskVersionEnumTwoThousandAndFourteen1031 PostStartExportTaskVersionEnum = "2014-10-31"
)

type PostStartExportTaskQueryParams struct {
	Action  PostStartExportTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartExportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartExportTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStartExportTaskRequest struct {
	QueryParams PostStartExportTaskQueryParams
	Headers     PostStartExportTaskHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartExportTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
