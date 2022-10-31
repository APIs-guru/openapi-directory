package operations

type UpdateMandateAliasPathParams struct {
	MandateUUID string `pathParam:"style=simple,explode=false,name=mandateUuid"`
}

type UpdateMandateAliasRequest struct {
	PathParams UpdateMandateAliasPathParams
}

type UpdateMandateAliasResponse struct {
	ContentType string
	StatusCode  int64
}
