package shared

type UsageReportsWarningsData struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type UsageReportsWarnings struct {
	Code    *string                    `json:"code"`
	Data    []UsageReportsWarningsData `json:"data"`
	Message *string                    `json:"message"`
}

type UsageReports struct {
	Etag          *string                `json:"etag"`
	Kind          *string                `json:"kind"`
	NextPageToken *string                `json:"nextPageToken"`
	UsageReports  []UsageReport          `json:"usageReports"`
	Warnings      []UsageReportsWarnings `json:"warnings"`
}
