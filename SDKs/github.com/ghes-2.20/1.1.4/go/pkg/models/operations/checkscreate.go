package operations

import (
	"openapi/pkg/models/shared"
	"time"
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
	EndColumn       *int64                                                      `json:"end_column,omitempty"`
	EndLine         int64                                                       `json:"end_line"`
	Message         string                                                      `json:"message"`
	Path            string                                                      `json:"path"`
	RawDetails      *string                                                     `json:"raw_details,omitempty"`
	StartColumn     *int64                                                      `json:"start_column,omitempty"`
	StartLine       int64                                                       `json:"start_line"`
	Title           *string                                                     `json:"title,omitempty"`
}

type ChecksCreateRequestBodyOutputImages struct {
	Alt      string  `json:"alt"`
	Caption  *string `json:"caption,omitempty"`
	ImageURL string  `json:"image_url"`
}

// ChecksCreateRequestBodyOutput
// Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/enterprise-server@2.20/rest/reference/checks#output-object) description.
type ChecksCreateRequestBodyOutput struct {
	Annotations []ChecksCreateRequestBodyOutputAnnotations `json:"annotations,omitempty"`
	Images      []ChecksCreateRequestBodyOutputImages      `json:"images,omitempty"`
	Summary     string                                     `json:"summary"`
	Text        *string                                    `json:"text,omitempty"`
	Title       string                                     `json:"title"`
}

type ChecksCreateRequestBodyStatusEnum string

const (
	ChecksCreateRequestBodyStatusEnumQueued     ChecksCreateRequestBodyStatusEnum = "queued"
	ChecksCreateRequestBodyStatusEnumInProgress ChecksCreateRequestBodyStatusEnum = "in_progress"
	ChecksCreateRequestBodyStatusEnumCompleted  ChecksCreateRequestBodyStatusEnum = "completed"
)

type ChecksCreateRequestBody struct {
	Actions     []ChecksCreateRequestBodyActions       `json:"actions,omitempty"`
	CompletedAt *time.Time                             `json:"completed_at,omitempty"`
	Conclusion  *ChecksCreateRequestBodyConclusionEnum `json:"conclusion,omitempty"`
	DetailsURL  *string                                `json:"details_url,omitempty"`
	ExternalID  *string                                `json:"external_id,omitempty"`
	HeadSha     string                                 `json:"head_sha"`
	Name        string                                 `json:"name"`
	Output      *ChecksCreateRequestBodyOutput         `json:"output,omitempty"`
	StartedAt   *time.Time                             `json:"started_at,omitempty"`
	Status      *ChecksCreateRequestBodyStatusEnum     `json:"status,omitempty"`
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
