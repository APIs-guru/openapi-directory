package shared



type DescribeUserResponse struct {
    ServerID string `json:"ServerId"`
    User DescribedUser `json:"User"`
    
}

