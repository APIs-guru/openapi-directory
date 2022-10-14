package shared

type GetBotChannelAssociationsResponse struct {
	BotChannelAssociations []BotChannelAssociation `json:"botChannelAssociations,omitempty"`
	NextToken              *string                 `json:"nextToken,omitempty"`
}
