package operations

import (
	"openapi/pkg/models/shared"
)

type PreprocessingBinarizeAdvancedRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type PreprocessingBinarizeAdvancedRequestBody struct {
	ImageFile PreprocessingBinarizeAdvancedRequestBodyImageFile `multipartForm:"file"`
}

type PreprocessingBinarizeAdvancedSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PreprocessingBinarizeAdvancedRequest struct {
	Request  PreprocessingBinarizeAdvancedRequestBody `request:"mediaType=multipart/form-data"`
	Security PreprocessingBinarizeAdvancedSecurity
}

type PreprocessingBinarizeAdvancedResponse struct {
	Body                                                      []byte
	ContentType                                               string
	PreprocessingBinarizeAdvanced200ApplicationJSONByteString *string
	PreprocessingBinarizeAdvanced200TextJSONByteString        *string
	StatusCode                                                int64
}
