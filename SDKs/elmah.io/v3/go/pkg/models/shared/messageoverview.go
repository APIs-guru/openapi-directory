package shared

import (
	"time"
)

type MessageOverview struct {
	Application     *string      `json:"application"`
	Breadcrumbs     []Breadcrumb `json:"breadcrumbs"`
	Code            *string      `json:"code"`
	Cookies         []Item       `json:"cookies"`
	CorrelationID   *string      `json:"correlationId"`
	Data            []Item       `json:"data"`
	DateTime        *time.Time   `json:"dateTime"`
	Detail          *string      `json:"detail"`
	Form            []Item       `json:"form"`
	Hostname        *string      `json:"hostname"`
	ID              *string      `json:"id"`
	Method          *string      `json:"method"`
	QueryString     []Item       `json:"queryString"`
	ServerVariables []Item       `json:"serverVariables"`
	Severity        *string      `json:"severity"`
	Source          *string      `json:"source"`
	StatusCode      *int32       `json:"statusCode"`
	Title           *string      `json:"title"`
	TitleTemplate   *string      `json:"titleTemplate"`
	Type            *string      `json:"type"`
	URL             *string      `json:"url"`
	User            *string      `json:"user"`
	Version         *string      `json:"version"`
}
