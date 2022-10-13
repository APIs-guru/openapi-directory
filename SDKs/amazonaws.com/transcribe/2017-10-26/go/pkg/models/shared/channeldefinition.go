package shared

type ChannelDefinition struct {
	ChannelID       *int64               `json:"ChannelId"`
	ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole"`
}
