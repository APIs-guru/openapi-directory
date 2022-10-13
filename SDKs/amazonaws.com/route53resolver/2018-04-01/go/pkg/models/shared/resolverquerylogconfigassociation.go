package shared

type ResolverQueryLogConfigAssociation struct {
	CreationTime             *string                                      `json:"CreationTime"`
	Error                    *ResolverQueryLogConfigAssociationErrorEnum  `json:"Error"`
	ErrorMessage             *string                                      `json:"ErrorMessage"`
	ID                       *string                                      `json:"Id"`
	ResolverQueryLogConfigID *string                                      `json:"ResolverQueryLogConfigId"`
	ResourceID               *string                                      `json:"ResourceId"`
	Status                   *ResolverQueryLogConfigAssociationStatusEnum `json:"Status"`
}
