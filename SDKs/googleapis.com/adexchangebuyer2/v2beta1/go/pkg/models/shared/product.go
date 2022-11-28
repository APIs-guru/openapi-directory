package shared

type ProductSyndicationProductEnum string

const (
	ProductSyndicationProductEnumSyndicationProductUnspecified ProductSyndicationProductEnum = "SYNDICATION_PRODUCT_UNSPECIFIED"
	ProductSyndicationProductEnumContent                       ProductSyndicationProductEnum = "CONTENT"
	ProductSyndicationProductEnumMobile                        ProductSyndicationProductEnum = "MOBILE"
	ProductSyndicationProductEnumVideo                         ProductSyndicationProductEnum = "VIDEO"
	ProductSyndicationProductEnumGames                         ProductSyndicationProductEnum = "GAMES"
)

// Product
// A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.
type Product struct {
	AvailableEndTime    *string                        `json:"availableEndTime,omitempty"`
	AvailableStartTime  *string                        `json:"availableStartTime,omitempty"`
	CreateTime          *string                        `json:"createTime,omitempty"`
	CreatorContacts     []ContactInformation           `json:"creatorContacts,omitempty"`
	DisplayName         *string                        `json:"displayName,omitempty"`
	HasCreatorSignedOff *bool                          `json:"hasCreatorSignedOff,omitempty"`
	ProductID           *string                        `json:"productId,omitempty"`
	ProductRevision     *string                        `json:"productRevision,omitempty"`
	PublisherProfileID  *string                        `json:"publisherProfileId,omitempty"`
	Seller              *Seller                        `json:"seller,omitempty"`
	SyndicationProduct  *ProductSyndicationProductEnum `json:"syndicationProduct,omitempty"`
	TargetingCriterion  []TargetingCriteria            `json:"targetingCriterion,omitempty"`
	Terms               *DealTerms                     `json:"terms,omitempty"`
	UpdateTime          *string                        `json:"updateTime,omitempty"`
	WebPropertyCode     *string                        `json:"webPropertyCode,omitempty"`
}
