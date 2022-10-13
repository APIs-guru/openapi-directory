package shared

type CustomerData struct {
	AccountsLimit             int32  `json:"accountsLimit"`
	AccountsUsed              int32  `json:"accountsUsed"`
	CntFiles                  *int64 `json:"cntFiles"`
	CntFolders                *int64 `json:"cntFolders"`
	CntRooms                  *int64 `json:"cntRooms"`
	CustomerEncryptionEnabled bool   `json:"customerEncryptionEnabled"`
	ID                        int64  `json:"id"`
	IsProviderCustomer        bool   `json:"isProviderCustomer"`
	Name                      string `json:"name"`
	SpaceLimit                int64  `json:"spaceLimit"`
	SpaceUsed                 int64  `json:"spaceUsed"`
}
