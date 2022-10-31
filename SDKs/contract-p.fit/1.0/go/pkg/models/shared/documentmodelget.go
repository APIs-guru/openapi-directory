package shared

type DocumentModelGet struct {
	Escalate         *StateModelGet           `json:"escalate,omitempty"`
	Feedback         map[string]interface{}   `json:"feedback,omitempty"`
	Files            map[string]interface{}   `json:"files,omitempty"`
	FlagForReview    *bool                    `json:"flag_for_review,omitempty"`
	ID               string                   `json:"id"`
	Inbox            string                   `json:"inbox"`
	LastVersion      *string                  `json:"last_version,omitempty"`
	Lock             *StateModelGet           `json:"lock,omitempty"`
	MetaInformation  map[string]interface{}   `json:"meta_information,omitempty"`
	OriginalFilename string                   `json:"original_filename"`
	PageCount        int64                    `json:"page_count"`
	Prediction       map[string]interface{}   `json:"prediction,omitempty"`
	Reject           *StateModelGet           `json:"reject,omitempty"`
	StatusData       *StatusDataModel         `json:"status_data,omitempty"`
	Submitted        *StateModelGet           `json:"submitted,omitempty"`
	Timings          *TimingsModelGet         `json:"timings,omitempty"`
	UsageData        map[string]interface{}   `json:"usage_data,omitempty"`
	Versions         []map[string]interface{} `json:"versions,omitempty"`
}
