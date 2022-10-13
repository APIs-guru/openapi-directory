package shared

type ProductSyndicationProductEnum string

const (
	ProductSyndicationProductEnumSyndicationProductUnspecified ProductSyndicationProductEnum = "SYNDICATION_PRODUCT_UNSPECIFIED"
	ProductSyndicationProductEnumContent                       ProductSyndicationProductEnum = "CONTENT"
	ProductSyndicationProductEnumMobile                        ProductSyndicationProductEnum = "MOBILE"
	ProductSyndicationProductEnumVideo                         ProductSyndicationProductEnum = "VIDEO"
	ProductSyndicationProductEnumGames                         ProductSyndicationProductEnum = "GAMES"
)

type Product struct {
	AvailableEndTime    *string                        `json:"availableEndTime"`
	AvailableStartTime  *string                        `json:"availableStartTime"`
	CreateTime          *string                        `json:"createTime"`
	CreatorContacts     []ContactInformation           `json:"creatorContacts"`
	DisplayName         *string                        `json:"displayName"`
	HasCreatorSignedOff *bool                          `json:"hasCreatorSignedOff"`
	ProductID           *string                        `json:"productId"`
	ProductRevision     *string                        `json:"productRevision"`
	PublisherProfileID  *string                        `json:"publisherProfileId"`
	Seller              *Seller                        `json:"seller"`
	SyndicationProduct  *ProductSyndicationProductEnum `json:"syndicationProduct"`
	TargetingCriterion  []TargetingCriteria            `json:"targetingCriterion"`
	Terms               *DealTerms                     `json:"terms"`
	UpdateTime          *string                        `json:"updateTime"`
	WebPropertyCode     *string                        `json:"webPropertyCode"`
}
