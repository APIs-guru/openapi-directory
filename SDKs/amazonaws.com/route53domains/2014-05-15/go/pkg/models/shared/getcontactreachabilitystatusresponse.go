package shared

type GetContactReachabilityStatusResponse struct {
	DomainName *string                 `json:"domainName"`
	Status     *ReachabilityStatusEnum `json:"status"`
}
