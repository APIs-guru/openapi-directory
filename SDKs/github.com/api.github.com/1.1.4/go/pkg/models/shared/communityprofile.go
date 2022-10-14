package shared

import (
	"time"
)

type CommunityProfileFilesCodeOfConductCodeOfConductSimple struct {
	HTMLURL string `json:"html_url"`
	Key     string `json:"key"`
	Name    string `json:"name"`
	URL     string `json:"url"`
}

type CommunityProfileFilesContributingCommunityHealthFile struct {
	HTMLURL string `json:"html_url"`
	URL     string `json:"url"`
}

type CommunityProfileFilesIssueTemplateCommunityHealthFile struct {
	HTMLURL string `json:"html_url"`
	URL     string `json:"url"`
}

type CommunityProfileFilesLicenseLicenseSimple struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	NodeID  string  `json:"node_id"`
	SpdxID  string  `json:"spdx_id"`
	URL     string  `json:"url"`
}

type CommunityProfileFilesPullRequestTemplateCommunityHealthFile struct {
	HTMLURL string `json:"html_url"`
	URL     string `json:"url"`
}

type CommunityProfileFilesReadmeCommunityHealthFile struct {
	HTMLURL string `json:"html_url"`
	URL     string `json:"url"`
}

type CommunityProfileFiles struct {
	CodeOfConduct       CommunityProfileFilesCodeOfConductCodeOfConductSimple       `json:"code_of_conduct"`
	Contributing        CommunityProfileFilesContributingCommunityHealthFile        `json:"contributing"`
	IssueTemplate       CommunityProfileFilesIssueTemplateCommunityHealthFile       `json:"issue_template"`
	License             CommunityProfileFilesLicenseLicenseSimple                   `json:"license"`
	PullRequestTemplate CommunityProfileFilesPullRequestTemplateCommunityHealthFile `json:"pull_request_template"`
	Readme              CommunityProfileFilesReadmeCommunityHealthFile              `json:"readme"`
}

type CommunityProfile struct {
	ContentReportsEnabled *bool                 `json:"content_reports_enabled,omitempty"`
	Description           string                `json:"description"`
	Documentation         string                `json:"documentation"`
	Files                 CommunityProfileFiles `json:"files"`
	HealthPercentage      int64                 `json:"health_percentage"`
	UpdatedAt             time.Time             `json:"updated_at"`
}
