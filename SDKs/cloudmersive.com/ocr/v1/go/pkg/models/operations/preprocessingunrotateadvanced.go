package operations

import (
	"openapi/pkg/models/shared"
)

type PreprocessingUnrotateAdvancedRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type PreprocessingUnrotateAdvancedRequestBody struct {
	ImageFile PreprocessingUnrotateAdvancedRequestBodyImageFile `multipartForm:"file"`
}

type PreprocessingUnrotateAdvancedSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PreprocessingUnrotateAdvancedRequest struct {
	Request  PreprocessingUnrotateAdvancedRequestBody `request:"mediaType=multipart/form-data"`
	Security PreprocessingUnrotateAdvancedSecurity
}

type PreprocessingUnrotateAdvancedResponse struct {
	Body                                                      []byte
	ContentType                                               string
	PreprocessingUnrotateAdvanced200ApplicationJSONByteString *string
	PreprocessingUnrotateAdvanced200TextJSONByteString        *string
	StatusCode                                                int64
}
