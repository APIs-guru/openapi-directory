package shared

type ChannelDefinition struct {
	ChannelID       *int64               `json:"ChannelId,omitempty"`
	ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole,omitempty"`
}
