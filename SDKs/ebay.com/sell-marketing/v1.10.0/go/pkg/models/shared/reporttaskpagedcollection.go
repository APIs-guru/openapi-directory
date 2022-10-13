package shared

type ReportTaskPagedCollection struct {
	Href        *string      `json:"href"`
	Limit       *int32       `json:"limit"`
	Next        *string      `json:"next"`
	Offset      *int32       `json:"offset"`
	Prev        *string      `json:"prev"`
	ReportTasks []ReportTask `json:"reportTasks"`
	Total       *int32       `json:"total"`
}
