package shared




type AmpURLErrorErrorCodeEnum string

const (
    AmpURLErrorErrorCodeEnumErrorCodeUnspecified AmpURLErrorErrorCodeEnum = "ERROR_CODE_UNSPECIFIED"
AmpURLErrorErrorCodeEnumInputURLNotFound AmpURLErrorErrorCodeEnum = "INPUT_URL_NOT_FOUND"
AmpURLErrorErrorCodeEnumNoAmpURL AmpURLErrorErrorCodeEnum = "NO_AMP_URL"
AmpURLErrorErrorCodeEnumApplicationError AmpURLErrorErrorCodeEnum = "APPLICATION_ERROR"
AmpURLErrorErrorCodeEnumURLIsValidAmp AmpURLErrorErrorCodeEnum = "URL_IS_VALID_AMP"
AmpURLErrorErrorCodeEnumURLIsInvalidAmp AmpURLErrorErrorCodeEnum = "URL_IS_INVALID_AMP"
)


type AmpURLError struct {
    ErrorCode *AmpURLErrorErrorCodeEnum `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    OriginalURL *string `json:"originalUrl,omitempty"`
    
}

