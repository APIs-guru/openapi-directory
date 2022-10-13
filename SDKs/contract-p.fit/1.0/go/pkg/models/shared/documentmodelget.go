package shared

type DocumentModelGet struct {
	Escalate         *StateModelGet           `json:"escalate"`
	Feedback         map[string]interface{}   `json:"feedback"`
	Files            map[string]interface{}   `json:"files"`
	FlagForReview    *bool                    `json:"flag_for_review"`
	ID               string                   `json:"id"`
	Inbox            string                   `json:"inbox"`
	LastVersion      *string                  `json:"last_version"`
	Lock             *StateModelGet           `json:"lock"`
	MetaInformation  map[string]interface{}   `json:"meta_information"`
	OriginalFilename string                   `json:"original_filename"`
	PageCount        int64                    `json:"page_count"`
	Prediction       map[string]interface{}   `json:"prediction"`
	Reject           *StateModelGet           `json:"reject"`
	StatusData       *StatusDataModel         `json:"status_data"`
	Submitted        *StateModelGet           `json:"submitted"`
	Timings          *TimingsModelGet         `json:"timings"`
	UsageData        map[string]interface{}   `json:"usage_data"`
	Versions         []map[string]interface{} `json:"versions"`
}
