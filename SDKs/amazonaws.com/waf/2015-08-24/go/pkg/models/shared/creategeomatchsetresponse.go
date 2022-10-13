package shared

type CreateGeoMatchSetResponse struct {
	ChangeToken *string      `json:"ChangeToken"`
	GeoMatchSet *GeoMatchSet `json:"GeoMatchSet"`
}
