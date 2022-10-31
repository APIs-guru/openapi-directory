package operations

import (
	"openapi/pkg/models/shared"
)

type PostBehaviorsRequestBodyAttachmentFile struct {
	AttachmentFile string `multipartForm:"name=attachment_file"`
	Content        []byte `multipartForm:"content"`
}

type PostBehaviorsRequestBody struct {
	AttachmentFile *PostBehaviorsRequestBodyAttachmentFile `multipartForm:"file"`
	Behavior       string                                  `multipartForm:"name=behavior"`
	Path           string                                  `multipartForm:"name=path"`
	Value          *string                                 `multipartForm:"name=value"`
}

type PostBehaviorsRequest struct {
	Request *PostBehaviorsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostBehaviorsResponse struct {
	BehaviorEntity *shared.BehaviorEntity
	ContentType    string
	StatusCode     int64
}
