package shared

// AuctionPackage
// Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.
type AuctionPackage struct {
	CreateTime        *string  `json:"createTime,omitempty"`
	Creator           *string  `json:"creator,omitempty"`
	Description       *string  `json:"description,omitempty"`
	DisplayName       *string  `json:"displayName,omitempty"`
	Name              *string  `json:"name,omitempty"`
	SubscribedClients []string `json:"subscribedClients,omitempty"`
	UpdateTime        *string  `json:"updateTime,omitempty"`
}
