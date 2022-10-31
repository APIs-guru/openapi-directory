package shared



type DescribeAccountModificationsResult struct {
    AccountModifications []AccountModification `json:"AccountModifications,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

