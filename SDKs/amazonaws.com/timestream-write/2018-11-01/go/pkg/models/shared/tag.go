package shared

// Tag
//
//	A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
