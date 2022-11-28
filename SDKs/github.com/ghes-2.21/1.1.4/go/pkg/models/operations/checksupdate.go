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
	EndColumn       *int64                                                      `json:"end_column,omitempty"`
	EndLine         int64                                                       `json:"end_line"`
	Message         string                                                      `json:"message"`
	Path            string                                                      `json:"path"`
	RawDetails      *string                                                     `json:"raw_details,omitempty"`
	StartColumn     *int64                                                      `json:"start_column,omitempty"`
	StartLine       int64                                                       `json:"start_line"`
	Title           *string                                                     `json:"title,omitempty"`
}

type ChecksUpdateRequestBodyOutputImages struct {
	Alt      string  `json:"alt"`
	Caption  *string `json:"caption,omitempty"`
	ImageURL string  `json:"image_url"`
}

// ChecksUpdateRequestBodyOutput
// Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#output-object-1) description.
type ChecksUpdateRequestBodyOutput struct {
	Annotations []ChecksUpdateRequestBodyOutputAnnotations `json:"annotations,omitempty"`
	Images      []ChecksUpdateRequestBodyOutputImages      `json:"images,omitempty"`
	Summary     string                                     `json:"summary"`
	Text        *string                                    `json:"text,omitempty"`
	Title       *string                                    `json:"title,omitempty"`
}

type ChecksUpdateRequestBodyStatusEnum string

const (
	ChecksUpdateRequestBodyStatusEnumQueued     ChecksUpdateRequestBodyStatusEnum = "queued"
	ChecksUpdateRequestBodyStatusEnumInProgress ChecksUpdateRequestBodyStatusEnum = "in_progress"
	ChecksUpdateRequestBodyStatusEnumCompleted  ChecksUpdateRequestBodyStatusEnum = "completed"
)

type ChecksUpdateRequestBody struct {
	Actions     []ChecksUpdateRequestBodyActions       `json:"actions,omitempty"`
	CompletedAt *time.Time                             `json:"completed_at,omitempty"`
	Conclusion  *ChecksUpdateRequestBodyConclusionEnum `json:"conclusion,omitempty"`
	DetailsURL  *string                                `json:"details_url,omitempty"`
	ExternalID  *string                                `json:"external_id,omitempty"`
	Name        *string                                `json:"name,omitempty"`
	Output      *ChecksUpdateRequestBodyOutput         `json:"output,omitempty"`
	StartedAt   *time.Time                             `json:"started_at,omitempty"`
	Status      *ChecksUpdateRequestBodyStatusEnum     `json:"status,omitempty"`
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
