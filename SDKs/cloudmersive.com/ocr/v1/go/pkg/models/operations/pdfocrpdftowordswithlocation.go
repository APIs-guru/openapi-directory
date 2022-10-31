package operations

import (
	"openapi/pkg/models/shared"
)

type PdfOcrPdfToWordsWithLocationHeaders struct {
	Language      *string `header:"style=simple,explode=false,name=language"`
	Preprocessing *string `header:"style=simple,explode=false,name=preprocessing"`
}

type PdfOcrPdfToWordsWithLocationRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type PdfOcrPdfToWordsWithLocationRequestBody struct {
	ImageFile PdfOcrPdfToWordsWithLocationRequestBodyImageFile `multipartForm:"file"`
}

type PdfOcrPdfToWordsWithLocationSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type PdfOcrPdfToWordsWithLocationRequest struct {
	Headers  PdfOcrPdfToWordsWithLocationHeaders
	Request  PdfOcrPdfToWordsWithLocationRequestBody `request:"mediaType=multipart/form-data"`
	Security PdfOcrPdfToWordsWithLocationSecurity
}

type PdfOcrPdfToWordsWithLocationResponse struct {
	Body                         []byte
	ContentType                  string
	PdfToWordsWithLocationResult *shared.PdfToWordsWithLocationResult
	StatusCode                   int64
}
