package shared

type DescribeMlModelsInput struct {
	Eq             *string                    `json:"EQ"`
	FilterVariable *MlModelFilterVariableEnum `json:"FilterVariable"`
	Ge             *string                    `json:"GE"`
	Gt             *string                    `json:"GT"`
	Le             *string                    `json:"LE"`
	Lt             *string                    `json:"LT"`
	Limit          *int64                     `json:"Limit"`
	Ne             *string                    `json:"NE"`
	NextToken      *string                    `json:"NextToken"`
	Prefix         *string                    `json:"Prefix"`
	SortOrder      *SortOrderEnum             `json:"SortOrder"`
}
