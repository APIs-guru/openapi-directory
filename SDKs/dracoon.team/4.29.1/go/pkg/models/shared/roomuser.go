package shared

type RoomUser struct {
	DisplayName        string              `json:"displayName"`
	Email              string              `json:"email"`
	ID                 int64               `json:"id"`
	IsGranted          bool                `json:"isGranted"`
	Login              string              `json:"login"`
	Permissions        *NodePermissions    `json:"permissions"`
	PublicKeyContainer *PublicKeyContainer `json:"publicKeyContainer"`
	UserInfo           UserInfo            `json:"userInfo"`
}
