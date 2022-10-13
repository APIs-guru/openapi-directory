package operations

type DeleteRecordPathParams struct {
	FeatureGroupName string `pathParam:"style=simple,explode=false,name=FeatureGroupName"`
}

type DeleteRecordQueryParams struct {
	EventTime                     string `queryParam:"style=form,explode=true,name=EventTime"`
	RecordIdentifierValueAsString string `queryParam:"style=form,explode=true,name=RecordIdentifierValueAsString"`
}

type DeleteRecordHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteRecordRequest struct {
	PathParams  DeleteRecordPathParams
	QueryParams DeleteRecordQueryParams
	Headers     DeleteRecordHeaders
}

type DeleteRecordResponse struct {
	AccessForbidden    *interface{}
	ContentType        string
	InternalFailure    *interface{}
	ServiceUnavailable *interface{}
	StatusCode         int64
	ValidationError    *interface{}
}
