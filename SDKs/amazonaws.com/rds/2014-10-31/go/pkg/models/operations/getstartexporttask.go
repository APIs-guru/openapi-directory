package operations

type GetStartExportTaskActionEnum string

const (
	GetStartExportTaskActionEnumStartExportTask GetStartExportTaskActionEnum = "StartExportTask"
)

type GetStartExportTaskVersionEnum string

const (
	GetStartExportTaskVersionEnumTwoThousandAndFourteen1031 GetStartExportTaskVersionEnum = "2014-10-31"
)

type GetStartExportTaskQueryParams struct {
	Action               GetStartExportTaskActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ExportOnly           []string                      `queryParam:"style=form,explode=true,name=ExportOnly"`
	ExportTaskIdentifier string                        `queryParam:"style=form,explode=true,name=ExportTaskIdentifier"`
	IamRoleArn           string                        `queryParam:"style=form,explode=true,name=IamRoleArn"`
	KmsKeyID             string                        `queryParam:"style=form,explode=true,name=KmsKeyId"`
	S3BucketName         string                        `queryParam:"style=form,explode=true,name=S3BucketName"`
	S3Prefix             *string                       `queryParam:"style=form,explode=true,name=S3Prefix"`
	SourceArn            string                        `queryParam:"style=form,explode=true,name=SourceArn"`
	Version              GetStartExportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartExportTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStartExportTaskRequest struct {
	QueryParams GetStartExportTaskQueryParams
	Headers     GetStartExportTaskHeaders
}

type GetStartExportTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
