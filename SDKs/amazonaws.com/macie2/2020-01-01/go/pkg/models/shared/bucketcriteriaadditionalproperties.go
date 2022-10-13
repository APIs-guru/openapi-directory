package shared

type BucketCriteriaAdditionalProperties struct {
	Eq     []string `json:"eq"`
	Gt     *int64   `json:"gt"`
	Gte    *int64   `json:"gte"`
	Lt     *int64   `json:"lt"`
	Lte    *int64   `json:"lte"`
	Neq    []string `json:"neq"`
	Prefix *string  `json:"prefix"`
}
