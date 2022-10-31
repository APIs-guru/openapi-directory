package operations

type PostV1VerificationSendFormatEnum string

const (
	PostV1VerificationSendFormatEnumJSON PostV1VerificationSendFormatEnum = "json"
	PostV1VerificationSendFormatEnumXML  PostV1VerificationSendFormatEnum = "xml"
)

type PostV1VerificationSendQueryParams struct {
	CountryCode *string                           `queryParam:"style=form,explode=true,name=country_code"`
	Format      *PostV1VerificationSendFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Key         string                            `queryParam:"style=form,explode=true,name=key"`
	Mesg        *string                           `queryParam:"style=form,explode=true,name=mesg"`
	Tel         string                            `queryParam:"style=form,explode=true,name=tel"`
}

type PostV1VerificationSendRequest struct {
	QueryParams PostV1VerificationSendQueryParams
}

type PostV1VerificationSendResponse struct {
	ContentType                                    string
	PostV1VerificationSend200ApplicationJSONString *string
	StatusCode                                     int64
}
