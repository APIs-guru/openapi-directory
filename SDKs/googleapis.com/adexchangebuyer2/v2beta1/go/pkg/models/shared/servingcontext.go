package shared

type ServingContextAllEnum string

const (
	ServingContextAllEnumSimpleContext ServingContextAllEnum = "SIMPLE_CONTEXT"
)

type ServingContext struct {
	All          *ServingContextAllEnum `json:"all"`
	AppType      *AppContext            `json:"appType"`
	AuctionType  *AuctionContext        `json:"auctionType"`
	Location     *LocationContext       `json:"location"`
	Platform     *PlatformContext       `json:"platform"`
	SecurityType *SecurityContext       `json:"securityType"`
}
