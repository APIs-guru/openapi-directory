package shared

type DescribeNodeAssociationStatusRequest struct {
	NodeAssociationStatusToken string `json:"NodeAssociationStatusToken"`
	ServerName                 string `json:"ServerName"`
}
