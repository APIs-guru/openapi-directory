package operations

type CreateBatchRequestBodyOperationEnum string

const (
	CreateBatchRequestBodyOperationEnumWhois CreateBatchRequestBodyOperationEnum = "whois"
	CreateBatchRequestBodyOperationEnumCheck CreateBatchRequestBodyOperationEnum = "check"
)

type CreateBatchRequestBodyOptionsFormatEnum string

const (
	CreateBatchRequestBodyOptionsFormatEnumRaw       CreateBatchRequestBodyOptionsFormatEnum = "raw"
	CreateBatchRequestBodyOptionsFormatEnumFormatted CreateBatchRequestBodyOptionsFormatEnum = "formatted"
	CreateBatchRequestBodyOptionsFormatEnumJSON      CreateBatchRequestBodyOptionsFormatEnum = "json"
)

type CreateBatchRequestBodyOptions struct {
	Format *CreateBatchRequestBodyOptionsFormatEnum `json:"format"`
}

type CreateBatchRequestBody struct {
	Domains   []string                            `json:"domains"`
	Operation CreateBatchRequestBodyOperationEnum `json:"operation"`
	Options   *CreateBatchRequestBodyOptions      `json:"options"`
}

type CreateBatchRequest struct {
	Request CreateBatchRequestBody `request:"mediaType=application/json"`
}

type CreateBatchResponse struct {
	Batch       *interface{}
	ContentType string
	StatusCode  int64
}
