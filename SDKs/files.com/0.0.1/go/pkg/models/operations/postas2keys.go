package operations

import (
	"openapi/pkg/models/shared"
)

type PostAs2KeysRequestBody struct {
	As2PartnershipName string `multipartForm:"name=as2_partnership_name"`
	PublicKey          string `multipartForm:"name=public_key"`
	UserID             *int32 `multipartForm:"name=user_id"`
}

type PostAs2KeysRequest struct {
	Request *PostAs2KeysRequestBody `request:"mediaType=multipart/form-data"`
}

type PostAs2KeysResponse struct {
	As2KeyEntity *shared.As2KeyEntity
	ContentType  string
	StatusCode   int64
}
