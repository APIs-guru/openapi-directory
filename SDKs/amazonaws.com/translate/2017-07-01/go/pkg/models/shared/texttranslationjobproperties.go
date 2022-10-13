package shared

import (
	"time"
)

type TextTranslationJobProperties struct {
	DataAccessRoleArn   *string           `json:"DataAccessRoleArn"`
	EndTime             *time.Time        `json:"EndTime"`
	InputDataConfig     *InputDataConfig  `json:"InputDataConfig"`
	JobDetails          *JobDetails       `json:"JobDetails"`
	JobID               *string           `json:"JobId"`
	JobName             *string           `json:"JobName"`
	JobStatus           *JobStatusEnum    `json:"JobStatus"`
	Message             *string           `json:"Message"`
	OutputDataConfig    *OutputDataConfig `json:"OutputDataConfig"`
	ParallelDataNames   []string          `json:"ParallelDataNames"`
	SourceLanguageCode  *string           `json:"SourceLanguageCode"`
	SubmittedTime       *time.Time        `json:"SubmittedTime"`
	TargetLanguageCodes []string          `json:"TargetLanguageCodes"`
	TerminologyNames    []string          `json:"TerminologyNames"`
}
