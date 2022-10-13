package operations

import (
	"openapi/pkg/models/shared"
)

type GitCreateTreePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitCreateTreeRequestBodyTreeModeEnum string

const (
	GitCreateTreeRequestBodyTreeModeEnumOneHundredThousandSixHundredAndFortyFour   GitCreateTreeRequestBodyTreeModeEnum = "100644"
	GitCreateTreeRequestBodyTreeModeEnumOneHundredThousandSevenHundredAndFiftyFive GitCreateTreeRequestBodyTreeModeEnum = "100755"
	GitCreateTreeRequestBodyTreeModeEnumFortyThousand                              GitCreateTreeRequestBodyTreeModeEnum = "040000"
	GitCreateTreeRequestBodyTreeModeEnumOneHundredAndSixtyThousand                 GitCreateTreeRequestBodyTreeModeEnum = "160000"
	GitCreateTreeRequestBodyTreeModeEnumOneHundredAndTwentyThousand                GitCreateTreeRequestBodyTreeModeEnum = "120000"
)

type GitCreateTreeRequestBodyTreeTypeEnum string

const (
	GitCreateTreeRequestBodyTreeTypeEnumBlob   GitCreateTreeRequestBodyTreeTypeEnum = "blob"
	GitCreateTreeRequestBodyTreeTypeEnumTree   GitCreateTreeRequestBodyTreeTypeEnum = "tree"
	GitCreateTreeRequestBodyTreeTypeEnumCommit GitCreateTreeRequestBodyTreeTypeEnum = "commit"
)

type GitCreateTreeRequestBodyTree struct {
	Content *string                               `json:"content"`
	Mode    *GitCreateTreeRequestBodyTreeModeEnum `json:"mode"`
	Path    *string                               `json:"path"`
	Sha     *string                               `json:"sha"`
	Type    *GitCreateTreeRequestBodyTreeTypeEnum `json:"type"`
}

type GitCreateTreeRequestBody struct {
	BaseTree *string                        `json:"base_tree"`
	Tree     []GitCreateTreeRequestBodyTree `json:"tree"`
}

type GitCreateTreeRequest struct {
	PathParams GitCreateTreePathParams
	Request    *GitCreateTreeRequestBody `request:"mediaType=application/json"`
}

type GitCreateTreeResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	GitTree         *shared.GitTree
	ValidationError *shared.ValidationError
}
