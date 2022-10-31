package shared

import (
	"time"
)

type CommunityProfileFilesCodeOfConductSimple struct {
	HTMLURL string `json:"html_url"`
	Key     string `json:"key"`
	Name    string `json:"name"`
	URL     string `json:"url"`
}

type CommunityProfileFilesCommunityHealthFile struct {
	HTMLURL string `json:"html_url"`
	URL     string `json:"url"`
}

type CommunityProfileFilesLicenseSimple struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	NodeID  string  `json:"node_id"`
	SpdxID  string  `json:"spdx_id"`
	URL     string  `json:"url"`
}

type CommunityProfileFiles struct {
	CodeOfConduct       CommunityProfileFilesCodeOfConductSimple `json:"code_of_conduct"`
	Contributing        CommunityProfileFilesCommunityHealthFile `json:"contributing"`
	IssueTemplate       CommunityProfileFilesCommunityHealthFile `json:"issue_template"`
	License             CommunityProfileFilesLicenseSimple       `json:"license"`
	PullRequestTemplate CommunityProfileFilesCommunityHealthFile `json:"pull_request_template"`
	Readme              CommunityProfileFilesCommunityHealthFile `json:"readme"`
}

type CommunityProfile struct {
	ContentReportsEnabled *bool                 `json:"content_reports_enabled,omitempty"`
	Description           string                `json:"description"`
	Documentation         string                `json:"documentation"`
	Files                 CommunityProfileFiles `json:"files"`
	HealthPercentage      int64                 `json:"health_percentage"`
	UpdatedAt             time.Time             `json:"updated_at"`
}
