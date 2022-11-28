package shared

// ChannelDefinition
// For a call analytics job, an object that indicates the audio channel that belongs to the agent and the audio channel that belongs to the customer.
type ChannelDefinition struct {
	ChannelID       *int64               `json:"ChannelId,omitempty"`
	ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole,omitempty"`
}
