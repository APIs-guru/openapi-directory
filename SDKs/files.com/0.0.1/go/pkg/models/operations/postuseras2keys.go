package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserAs2KeysRequestBody struct {
	As2PartnershipName string `multipartForm:"name=as2_partnership_name"`
	PublicKey          string `multipartForm:"name=public_key"`
	UserID             *int32 `multipartForm:"name=user_id"`
}

type PostUserAs2KeysRequest struct {
	Request *PostUserAs2KeysRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUserAs2KeysResponse struct {
	As2KeyEntity *shared.As2KeyEntity
	ContentType  string
	StatusCode   int64
}
