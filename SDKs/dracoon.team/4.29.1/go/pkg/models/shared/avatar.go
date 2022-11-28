package shared

// Avatar
// User avatar information
type Avatar struct {
	AvatarURI      string `json:"avatarUri"`
	AvatarUUID     string `json:"avatarUuid"`
	IsCustomAvatar bool   `json:"isCustomAvatar"`
}
