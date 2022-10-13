package shared

type ErrorHandlerErrorCodeEnum string

const (
	ErrorHandlerErrorCodeEnumErrorCodeUnspecified  ErrorHandlerErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
	ErrorHandlerErrorCodeEnumErrorCodeDefault      ErrorHandlerErrorCodeEnum = "ERROR_CODE_DEFAULT"
	ErrorHandlerErrorCodeEnumErrorCodeOverQuota    ErrorHandlerErrorCodeEnum = "ERROR_CODE_OVER_QUOTA"
	ErrorHandlerErrorCodeEnumErrorCodeDosAPIDenial ErrorHandlerErrorCodeEnum = "ERROR_CODE_DOS_API_DENIAL"
	ErrorHandlerErrorCodeEnumErrorCodeTimeout      ErrorHandlerErrorCodeEnum = "ERROR_CODE_TIMEOUT"
)

type ErrorHandler struct {
	ErrorCode  *ErrorHandlerErrorCodeEnum `json:"errorCode"`
	MimeType   *string                    `json:"mimeType"`
	StaticFile *string                    `json:"staticFile"`
}
