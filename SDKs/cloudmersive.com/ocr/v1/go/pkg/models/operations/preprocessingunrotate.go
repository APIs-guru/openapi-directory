package operations

import (
	"openapi/pkg/models/shared"
)

type PreprocessingUnrotateRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type PreprocessingUnrotateRequestBody struct {
	ImageFile PreprocessingUnrotateRequestBodyImageFile `multipartForm:"file"`
}

type PreprocessingUnrotateSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PreprocessingUnrotateRequest struct {
	Request  PreprocessingUnrotateRequestBody `request:"mediaType=multipart/form-data"`
	Security PreprocessingUnrotateSecurity
}

type PreprocessingUnrotateResponse struct {
	Body                                              []byte
	ContentType                                       string
	PreprocessingUnrotate200ApplicationJSONByteString *string
	PreprocessingUnrotate200TextJSONByteString        *string
	StatusCode                                        int64
}
