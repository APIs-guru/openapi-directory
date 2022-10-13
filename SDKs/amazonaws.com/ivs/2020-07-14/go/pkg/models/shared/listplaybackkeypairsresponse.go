package shared

type ListPlaybackKeyPairsResponse struct {
	KeyPairs  []PlaybackKeyPairSummary `json:"keyPairs"`
	NextToken *string                  `json:"nextToken"`
}
