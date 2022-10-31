package shared




type ServingContextAllEnum string

const (
    ServingContextAllEnumSimpleContext ServingContextAllEnum = "SIMPLE_CONTEXT"
)


type ServingContext struct {
    All *ServingContextAllEnum `json:"all,omitempty"`
    AppType *AppContext `json:"appType,omitempty"`
    AuctionType *AuctionContext `json:"auctionType,omitempty"`
    Location *LocationContext `json:"location,omitempty"`
    Platform *PlatformContext `json:"platform,omitempty"`
    SecurityType *SecurityContext `json:"securityType,omitempty"`
    
}

