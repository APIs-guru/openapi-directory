package shared

import (
	"time"
)

type TeamFullTeamSimple struct {
	Description     string  `json:"description"`
	HTMLURL         string  `json:"html_url"`
	ID              int64   `json:"id"`
	LdapDn          *string `json:"ldap_dn,omitempty"`
	MembersURL      string  `json:"members_url"`
	Name            string  `json:"name"`
	NodeID          string  `json:"node_id"`
	Permission      string  `json:"permission"`
	Privacy         *string `json:"privacy,omitempty"`
	RepositoriesURL string  `json:"repositories_url"`
	Slug            string  `json:"slug"`
	URL             string  `json:"url"`
}

type TeamFullPrivacyEnum string

const (
	TeamFullPrivacyEnumClosed TeamFullPrivacyEnum = "closed"
	TeamFullPrivacyEnumSecret TeamFullPrivacyEnum = "secret"
)

type TeamFull struct {
	CreatedAt       time.Time            `json:"created_at"`
	Description     string               `json:"description"`
	HTMLURL         string               `json:"html_url"`
	ID              int64                `json:"id"`
	LdapDn          *string              `json:"ldap_dn,omitempty"`
	MembersCount    int64                `json:"members_count"`
	MembersURL      string               `json:"members_url"`
	Name            string               `json:"name"`
	NodeID          string               `json:"node_id"`
	Organization    OrganizationFull     `json:"organization"`
	Parent          *TeamFullTeamSimple  `json:"parent,omitempty"`
	Permission      string               `json:"permission"`
	Privacy         *TeamFullPrivacyEnum `json:"privacy,omitempty"`
	ReposCount      int64                `json:"repos_count"`
	RepositoriesURL string               `json:"repositories_url"`
	Slug            string               `json:"slug"`
	UpdatedAt       time.Time            `json:"updated_at"`
	URL             string               `json:"url"`
}
