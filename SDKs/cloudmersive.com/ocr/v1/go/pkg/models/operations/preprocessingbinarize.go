package operations

import (
	"openapi/pkg/models/shared"
)

type PreprocessingBinarizeRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type PreprocessingBinarizeRequestBody struct {
	ImageFile PreprocessingBinarizeRequestBodyImageFile `multipartForm:"file"`
}

type PreprocessingBinarizeSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PreprocessingBinarizeRequest struct {
	Request  PreprocessingBinarizeRequestBody `request:"mediaType=multipart/form-data"`
	Security PreprocessingBinarizeSecurity
}

type PreprocessingBinarizeResponse struct {
	Body                                              []byte
	ContentType                                       string
	PreprocessingBinarize200ApplicationJSONByteString *string
	PreprocessingBinarize200TextJSONByteString        *string
	StatusCode                                        int64
}
