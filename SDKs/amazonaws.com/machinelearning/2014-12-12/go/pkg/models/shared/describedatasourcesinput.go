package shared



type DescribeDataSourcesInput struct {
    Eq *string `json:"EQ,omitempty"`
    FilterVariable *DataSourceFilterVariableEnum `json:"FilterVariable,omitempty"`
    Ge *string `json:"GE,omitempty"`
    Gt *string `json:"GT,omitempty"`
    Le *string `json:"LE,omitempty"`
    Lt *string `json:"LT,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    Ne *string `json:"NE,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Prefix *string `json:"Prefix,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    
}

