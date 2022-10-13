package shared

type AuctionPackage struct {
	CreateTime        *string  `json:"createTime"`
	Creator           *string  `json:"creator"`
	Description       *string  `json:"description"`
	DisplayName       *string  `json:"displayName"`
	Name              *string  `json:"name"`
	SubscribedClients []string `json:"subscribedClients"`
	UpdateTime        *string  `json:"updateTime"`
}
