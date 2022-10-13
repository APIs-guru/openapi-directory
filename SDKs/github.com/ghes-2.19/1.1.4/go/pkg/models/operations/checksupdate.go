package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ChecksUpdatePathParams struct {
	CheckRunID int64  `pathParam:"style=simple,explode=false,name=check_run_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksUpdateRequestBodyActions struct {
	Description string `json:"description"`
	Identifier  string `json:"identifier"`
	Label       string `json:"label"`
}

type ChecksUpdateRequestBodyConclusionEnum string

const (
	ChecksUpdateRequestBodyConclusionEnumActionRequired ChecksUpdateRequestBodyConclusionEnum = "action_required"
	ChecksUpdateRequestBodyConclusionEnumCancelled      ChecksUpdateRequestBodyConclusionEnum = "cancelled"
	ChecksUpdateRequestBodyConclusionEnumFailure        ChecksUpdateRequestBodyConclusionEnum = "failure"
	ChecksUpdateRequestBodyConclusionEnumNeutral        ChecksUpdateRequestBodyConclusionEnum = "neutral"
	ChecksUpdateRequestBodyConclusionEnumSuccess        ChecksUpdateRequestBodyConclusionEnum = "success"
	ChecksUpdateRequestBodyConclusionEnumSkipped        ChecksUpdateRequestBodyConclusionEnum = "skipped"
	ChecksUpdateRequestBodyConclusionEnumStale          ChecksUpdateRequestBodyConclusionEnum = "stale"
	ChecksUpdateRequestBodyConclusionEnumTimedOut       ChecksUpdateRequestBodyConclusionEnum = "timed_out"
)

type ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum string

const (
	ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnumNotice  ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum = "notice"
	ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnumWarning ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum = "warning"
	ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnumFailure ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum = "failure"
)

type ChecksUpdateRequestBodyOutputAnnotations struct {
	AnnotationLevel ChecksUpdateRequestBodyOutputAnnotationsAnnotationLevelEnum `json:"annotation_level"`
	EndColumn       *int64                                                      `json:"end_column"`
	EndLine         int64                                                       `json:"end_line"`
	Message         string                                                      `json:"message"`
	Path            string                                                      `json:"path"`
	RawDetails      *string                                                     `json:"raw_details"`
	StartColumn     *int64                                                      `json:"start_column"`
	StartLine       int64                                                       `json:"start_line"`
	Title           *string                                                     `json:"title"`
}

type ChecksUpdateRequestBodyOutputImages struct {
	Alt      string  `json:"alt"`
	Caption  *string `json:"caption"`
	ImageURL string  `json:"image_url"`
}

type ChecksUpdateRequestBodyOutput struct {
	Annotations []ChecksUpdateRequestBodyOutputAnnotations `json:"annotations"`
	Images      []ChecksUpdateRequestBodyOutputImages      `json:"images"`
	Summary     string                                     `json:"summary"`
	Text        *string                                    `json:"text"`
	Title       *string                                    `json:"title"`
}

type ChecksUpdateRequestBodyStatusEnum string

const (
	ChecksUpdateRequestBodyStatusEnumQueued     ChecksUpdateRequestBodyStatusEnum = "queued"
	ChecksUpdateRequestBodyStatusEnumInProgress ChecksUpdateRequestBodyStatusEnum = "in_progress"
	ChecksUpdateRequestBodyStatusEnumCompleted  ChecksUpdateRequestBodyStatusEnum = "completed"
)

type ChecksUpdateRequestBody struct {
	Actions     []ChecksUpdateRequestBodyActions       `json:"actions"`
	CompletedAt *time.Time                             `json:"completed_at"`
	Conclusion  *ChecksUpdateRequestBodyConclusionEnum `json:"conclusion"`
	DetailsURL  *string                                `json:"details_url"`
	ExternalID  *string                                `json:"external_id"`
	Name        *string                                `json:"name"`
	Output      *ChecksUpdateRequestBodyOutput         `json:"output"`
	StartedAt   *time.Time                             `json:"started_at"`
	Status      *ChecksUpdateRequestBodyStatusEnum     `json:"status"`
}

type ChecksUpdateRequest struct {
	PathParams ChecksUpdatePathParams
	Request    *ChecksUpdateRequestBody `request:"mediaType=application/json"`
}

type ChecksUpdateResponse struct {
	ContentType string
	StatusCode  int64
	CheckRun    *shared.CheckRun
}
