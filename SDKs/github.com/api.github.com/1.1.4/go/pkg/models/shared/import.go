package shared

type ImportProjectChoices struct {
	HumanName   *string `json:"human_name,omitempty"`
	TfvcProject *string `json:"tfvc_project,omitempty"`
	Vcs         *string `json:"vcs,omitempty"`
}

type ImportStatusEnum string

const (
	ImportStatusEnumAuth                   ImportStatusEnum = "auth"
	ImportStatusEnumError                  ImportStatusEnum = "error"
	ImportStatusEnumNone                   ImportStatusEnum = "none"
	ImportStatusEnumDetecting              ImportStatusEnum = "detecting"
	ImportStatusEnumChoose                 ImportStatusEnum = "choose"
	ImportStatusEnumAuthFailed             ImportStatusEnum = "auth_failed"
	ImportStatusEnumImporting              ImportStatusEnum = "importing"
	ImportStatusEnumMapping                ImportStatusEnum = "mapping"
	ImportStatusEnumWaitingToPush          ImportStatusEnum = "waiting_to_push"
	ImportStatusEnumPushing                ImportStatusEnum = "pushing"
	ImportStatusEnumComplete               ImportStatusEnum = "complete"
	ImportStatusEnumSetup                  ImportStatusEnum = "setup"
	ImportStatusEnumUnknown                ImportStatusEnum = "unknown"
	ImportStatusEnumDetectionFoundMultiple ImportStatusEnum = "detection_found_multiple"
	ImportStatusEnumDetectionFoundNothing  ImportStatusEnum = "detection_found_nothing"
	ImportStatusEnumDetectionNeedsAuth     ImportStatusEnum = "detection_needs_auth"
)

// Import
// A repository import from an external source.
type Import struct {
	AuthorsCount    *int64                 `json:"authors_count,omitempty"`
	AuthorsURL      string                 `json:"authors_url"`
	CommitCount     *int64                 `json:"commit_count,omitempty"`
	ErrorMessage    *string                `json:"error_message,omitempty"`
	FailedStep      *string                `json:"failed_step,omitempty"`
	HasLargeFiles   *bool                  `json:"has_large_files,omitempty"`
	HTMLURL         string                 `json:"html_url"`
	ImportPercent   *int64                 `json:"import_percent,omitempty"`
	LargeFilesCount *int64                 `json:"large_files_count,omitempty"`
	LargeFilesSize  *int64                 `json:"large_files_size,omitempty"`
	Message         *string                `json:"message,omitempty"`
	ProjectChoices  []ImportProjectChoices `json:"project_choices,omitempty"`
	PushPercent     *int64                 `json:"push_percent,omitempty"`
	RepositoryURL   string                 `json:"repository_url"`
	Status          ImportStatusEnum       `json:"status"`
	StatusText      *string                `json:"status_text,omitempty"`
	SvcRoot         *string                `json:"svc_root,omitempty"`
	SvnRoot         *string                `json:"svn_root,omitempty"`
	TfvcProject     *string                `json:"tfvc_project,omitempty"`
	URL             string                 `json:"url"`
	UseLfs          *string                `json:"use_lfs,omitempty"`
	Vcs             string                 `json:"vcs"`
	VcsURL          string                 `json:"vcs_url"`
}
