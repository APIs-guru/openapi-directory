package shared

type GetBotChannelAssociationsResponse struct {
	BotChannelAssociations []BotChannelAssociation `json:"botChannelAssociations"`
	NextToken              *string                 `json:"nextToken"`
}
