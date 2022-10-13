package shared

type ListHiTsForQualificationTypeResponse struct {
	HiTs       []Hit   `json:"HITs"`
	NextToken  *string `json:"NextToken"`
	NumResults *int64  `json:"NumResults"`
}
