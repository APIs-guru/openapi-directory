package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksCreatePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksCreateRequestBodyActions struct {
	Description string `json:"description"`
	Identifier  string `json:"identifier"`
	Label       string `json:"label"`
}

type ChecksCreateRequestBodyConclusionEnum string

const (
	ChecksCreateRequestBodyConclusionEnumActionRequired ChecksCreateRequestBodyConclusionEnum = "action_required"
	ChecksCreateRequestBodyConclusionEnumCancelled      ChecksCreateRequestBodyConclusionEnum = "cancelled"
	ChecksCreateRequestBodyConclusionEnumFailure        ChecksCreateRequestBodyConclusionEnum = "failure"
	ChecksCreateRequestBodyConclusionEnumNeutral        ChecksCreateRequestBodyConclusionEnum = "neutral"
	ChecksCreateRequestBodyConclusionEnumSuccess        ChecksCreateRequestBodyConclusionEnum = "success"
	ChecksCreateRequestBodyConclusionEnumSkipped        ChecksCreateRequestBodyConclusionEnum = "skipped"
	ChecksCreateRequestBodyConclusionEnumStale          ChecksCreateRequestBodyConclusionEnum = "stale"
	ChecksCreateRequestBodyConclusionEnumTimedOut       ChecksCreateRequestBodyConclusionEnum = "timed_out"
)

type ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum string

const (
	ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnumNotice  ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = "notice"
	ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnumWarning ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = "warning"
	ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnumFailure ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum = "failure"
)

type ChecksCreateRequestBodyOutputAnnotations struct {
	AnnotationLevel ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum `json:"annotation_level"`
	EndColumn       *int64                                                      `json:"end_column"`
	EndLine         int64                                                       `json:"end_line"`
	Message         string                                                      `json:"message"`
	Path            string                                                      `json:"path"`
	RawDetails      *string                                                     `json:"raw_details"`
	StartColumn     *int64                                                      `json:"start_column"`
	StartLine       int64                                                       `json:"start_line"`
	Title           *string                                                     `json:"title"`
}

type ChecksCreateRequestBodyOutputImages struct {
	Alt      string  `json:"alt"`
	Caption  *string `json:"caption"`
	ImageURL string  `json:"image_url"`
}

type ChecksCreateRequestBodyOutput struct {
	Annotations []ChecksCreateRequestBodyOutputAnnotations `json:"annotations"`
	Images      []ChecksCreateRequestBodyOutputImages      `json:"images"`
	Summary     string                                     `json:"summary"`
	Text        *string                                    `json:"text"`
	Title       string                                     `json:"title"`
}

type ChecksCreateRequestBodyStatusEnum string

const (
	ChecksCreateRequestBodyStatusEnumQueued     ChecksCreateRequestBodyStatusEnum = "queued"
	ChecksCreateRequestBodyStatusEnumInProgress ChecksCreateRequestBodyStatusEnum = "in_progress"
	ChecksCreateRequestBodyStatusEnumCompleted  ChecksCreateRequestBodyStatusEnum = "completed"
)

type ChecksCreateRequestBody struct {
	Actions     []ChecksCreateRequestBodyActions       `json:"actions"`
	CompletedAt *string                                `json:"completed_at"`
	Conclusion  *ChecksCreateRequestBodyConclusionEnum `json:"conclusion"`
	DetailsURL  *string                                `json:"details_url"`
	ExternalID  *string                                `json:"external_id"`
	HeadSha     string                                 `json:"head_sha"`
	Name        string                                 `json:"name"`
	Output      *ChecksCreateRequestBodyOutput         `json:"output"`
	StartedAt   *string                                `json:"started_at"`
	Status      *ChecksCreateRequestBodyStatusEnum     `json:"status"`
}

type ChecksCreateRequest struct {
	PathParams ChecksCreatePathParams
	Request    *ChecksCreateRequestBody `request:"mediaType=application/json"`
}

type ChecksCreateResponse struct {
	ContentType string
	StatusCode  int64
	CheckRun    *shared.CheckRun
}
