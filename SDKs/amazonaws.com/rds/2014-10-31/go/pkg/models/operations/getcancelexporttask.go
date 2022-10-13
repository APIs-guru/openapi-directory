package operations

type GetCancelExportTaskActionEnum string

const (
	GetCancelExportTaskActionEnumCancelExportTask GetCancelExportTaskActionEnum = "CancelExportTask"
)

type GetCancelExportTaskVersionEnum string

const (
	GetCancelExportTaskVersionEnumTwoThousandAndFourteen1031 GetCancelExportTaskVersionEnum = "2014-10-31"
)

type GetCancelExportTaskQueryParams struct {
	Action               GetCancelExportTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ExportTaskIdentifier string                         `queryParam:"style=form,explode=true,name=ExportTaskIdentifier"`
	Version              GetCancelExportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCancelExportTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCancelExportTaskRequest struct {
	QueryParams GetCancelExportTaskQueryParams
	Headers     GetCancelExportTaskHeaders
}

type GetCancelExportTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
