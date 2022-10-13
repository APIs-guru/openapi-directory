package shared

type DeleteGeoMatchSetRequest struct {
	ChangeToken   string `json:"ChangeToken"`
	GeoMatchSetID string `json:"GeoMatchSetId"`
}
