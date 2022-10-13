package shared

type NestedParameter struct {
	BoolValue      *bool    `json:"boolValue"`
	IntValue       *string  `json:"intValue"`
	MultiBoolValue []bool   `json:"multiBoolValue"`
	MultiIntValue  []string `json:"multiIntValue"`
	MultiValue     []string `json:"multiValue"`
	Name           *string  `json:"name"`
	Value          *string  `json:"value"`
}
