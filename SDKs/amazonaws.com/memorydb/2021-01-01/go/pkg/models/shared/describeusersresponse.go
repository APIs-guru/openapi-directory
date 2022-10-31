package shared



type DescribeUsersResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Users []User `json:"Users,omitempty"`
    
}

