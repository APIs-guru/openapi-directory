package shared

type APICoreDtoClickStreamHitListPage struct {
	Hits    []APICoreDtoClickStreamHit `json:"hits"`
	LastKey *string                    `json:"lastKey"`
}
