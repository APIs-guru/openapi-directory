package shared

type GetKeyPairsResult struct {
	KeyPairs      []KeyPair `json:"keyPairs"`
	NextPageToken *string   `json:"nextPageToken"`
}
