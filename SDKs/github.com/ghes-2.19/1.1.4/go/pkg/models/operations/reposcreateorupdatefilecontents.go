package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateOrUpdateFileContentsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Path  string `pathParam:"style=simple,explode=false,name=path"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateOrUpdateFileContentsRequestBodyAuthor struct {
	Date  *string `json:"date"`
	Email string  `json:"email"`
	Name  string  `json:"name"`
}

type ReposCreateOrUpdateFileContentsRequestBodyCommitter struct {
	Date  *string `json:"date"`
	Email string  `json:"email"`
	Name  string  `json:"name"`
}

type ReposCreateOrUpdateFileContentsRequestBody struct {
	Author    *ReposCreateOrUpdateFileContentsRequestBodyAuthor    `json:"author"`
	Branch    *string                                              `json:"branch"`
	Committer *ReposCreateOrUpdateFileContentsRequestBodyCommitter `json:"committer"`
	Content   string                                               `json:"content"`
	Message   string                                               `json:"message"`
	Sha       *string                                              `json:"sha"`
}

type ReposCreateOrUpdateFileContentsRequest struct {
	PathParams ReposCreateOrUpdateFileContentsPathParams
	Request    *ReposCreateOrUpdateFileContentsRequestBody `request:"mediaType=application/json"`
}

type ReposCreateOrUpdateFileContentsResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	FileCommit      *shared.FileCommit
	ValidationError *shared.ValidationError
}
