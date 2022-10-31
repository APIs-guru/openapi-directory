package shared



type DescribeEntityResponse struct {
    Details *string `json:"Details,omitempty"`
    EntityArn *string `json:"EntityArn,omitempty"`
    EntityIdentifier *string `json:"EntityIdentifier,omitempty"`
    EntityType *string `json:"EntityType,omitempty"`
    LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
    
}

