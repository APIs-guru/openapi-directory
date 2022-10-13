package operations

type PostCancelExportTaskActionEnum string

const (
	PostCancelExportTaskActionEnumCancelExportTask PostCancelExportTaskActionEnum = "CancelExportTask"
)

type PostCancelExportTaskVersionEnum string

const (
	PostCancelExportTaskVersionEnumTwoThousandAndFourteen1031 PostCancelExportTaskVersionEnum = "2014-10-31"
)

type PostCancelExportTaskQueryParams struct {
	Action  PostCancelExportTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCancelExportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCancelExportTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCancelExportTaskRequest struct {
	QueryParams PostCancelExportTaskQueryParams
	Headers     PostCancelExportTaskHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCancelExportTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
