package shared

import (
	"time"
)

type CreateMessage struct {
	Application     *string      `json:"application,omitempty"`
	Breadcrumbs     []Breadcrumb `json:"breadcrumbs,omitempty"`
	Code            *string      `json:"code,omitempty"`
	Cookies         []Item       `json:"cookies,omitempty"`
	CorrelationID   *string      `json:"correlationId,omitempty"`
	Data            []Item       `json:"data,omitempty"`
	DateTime        *time.Time   `json:"dateTime,omitempty"`
	Detail          *string      `json:"detail,omitempty"`
	Form            []Item       `json:"form,omitempty"`
	Hostname        *string      `json:"hostname,omitempty"`
	Method          *string      `json:"method,omitempty"`
	QueryString     []Item       `json:"queryString,omitempty"`
	ServerVariables []Item       `json:"serverVariables,omitempty"`
	Severity        *string      `json:"severity,omitempty"`
	Source          *string      `json:"source,omitempty"`
	StatusCode      *int32       `json:"statusCode,omitempty"`
	Title           *string      `json:"title,omitempty"`
	TitleTemplate   *string      `json:"titleTemplate,omitempty"`
	Type            *string      `json:"type,omitempty"`
	URL             *string      `json:"url,omitempty"`
	User            *string      `json:"user,omitempty"`
	Version         *string      `json:"version,omitempty"`
}
