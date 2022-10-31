package operations

type PutAccountDetailsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutAccountDetailsRequestBodyContactLanguageEnum string

const (
	PutAccountDetailsRequestBodyContactLanguageEnumEn PutAccountDetailsRequestBodyContactLanguageEnum = "EN"
	PutAccountDetailsRequestBodyContactLanguageEnumJa PutAccountDetailsRequestBodyContactLanguageEnum = "JA"
)

type PutAccountDetailsRequestBodyMailTypeEnum string

const (
	PutAccountDetailsRequestBodyMailTypeEnumMarketing     PutAccountDetailsRequestBodyMailTypeEnum = "MARKETING"
	PutAccountDetailsRequestBodyMailTypeEnumTransactional PutAccountDetailsRequestBodyMailTypeEnum = "TRANSACTIONAL"
)

type PutAccountDetailsRequestBody struct {
	AdditionalContactEmailAddresses []string                                         `json:"AdditionalContactEmailAddresses,omitempty"`
	ContactLanguage                 *PutAccountDetailsRequestBodyContactLanguageEnum `json:"ContactLanguage,omitempty"`
	MailType                        PutAccountDetailsRequestBodyMailTypeEnum         `json:"MailType"`
	ProductionAccessEnabled         *bool                                            `json:"ProductionAccessEnabled,omitempty"`
	UseCaseDescription              string                                           `json:"UseCaseDescription"`
	WebsiteURL                      string                                           `json:"WebsiteURL"`
}

type PutAccountDetailsRequest struct {
	Headers PutAccountDetailsHeaders
	Request PutAccountDetailsRequestBody `request:"mediaType=application/json"`
}

type PutAccountDetailsResponse struct {
	BadRequestException       *interface{}
	ConflictException         *interface{}
	ContentType               string
	PutAccountDetailsResponse map[string]interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
