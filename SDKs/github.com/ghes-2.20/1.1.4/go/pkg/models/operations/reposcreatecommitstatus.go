package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateCommitStatusPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	Sha   string `pathParam:"style=simple,explode=false,name=sha"`
}

type ReposCreateCommitStatusRequestBodyStateEnum string

const (
	ReposCreateCommitStatusRequestBodyStateEnumError   ReposCreateCommitStatusRequestBodyStateEnum = "error"
	ReposCreateCommitStatusRequestBodyStateEnumFailure ReposCreateCommitStatusRequestBodyStateEnum = "failure"
	ReposCreateCommitStatusRequestBodyStateEnumPending ReposCreateCommitStatusRequestBodyStateEnum = "pending"
	ReposCreateCommitStatusRequestBodyStateEnumSuccess ReposCreateCommitStatusRequestBodyStateEnum = "success"
)

type ReposCreateCommitStatusRequestBody struct {
	Context     *string                                     `json:"context"`
	Description *string                                     `json:"description"`
	State       ReposCreateCommitStatusRequestBodyStateEnum `json:"state"`
	TargetURL   *string                                     `json:"target_url"`
}

type ReposCreateCommitStatusRequest struct {
	PathParams ReposCreateCommitStatusPathParams
	Request    *ReposCreateCommitStatusRequestBody `request:"mediaType=application/json"`
}

type ReposCreateCommitStatusResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Status      *shared.Status
}
