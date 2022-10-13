package shared

type ImportProjectChoices struct {
	HumanName   *string `json:"human_name"`
	TfvcProject *string `json:"tfvc_project"`
	Vcs         *string `json:"vcs"`
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

type Import struct {
	AuthorsCount    *int64                 `json:"authors_count"`
	AuthorsURL      string                 `json:"authors_url"`
	CommitCount     *int64                 `json:"commit_count"`
	ErrorMessage    *string                `json:"error_message"`
	FailedStep      *string                `json:"failed_step"`
	HasLargeFiles   *bool                  `json:"has_large_files"`
	HTMLURL         string                 `json:"html_url"`
	ImportPercent   *int64                 `json:"import_percent"`
	LargeFilesCount *int64                 `json:"large_files_count"`
	LargeFilesSize  *int64                 `json:"large_files_size"`
	Message         *string                `json:"message"`
	ProjectChoices  []ImportProjectChoices `json:"project_choices"`
	PushPercent     *int64                 `json:"push_percent"`
	RepositoryURL   string                 `json:"repository_url"`
	Status          ImportStatusEnum       `json:"status"`
	StatusText      *string                `json:"status_text"`
	SvcRoot         *string                `json:"svc_root"`
	SvnRoot         *string                `json:"svn_root"`
	TfvcProject     *string                `json:"tfvc_project"`
	URL             string                 `json:"url"`
	UseLfs          *string                `json:"use_lfs"`
	Vcs             string                 `json:"vcs"`
	VcsURL          string                 `json:"vcs_url"`
}
