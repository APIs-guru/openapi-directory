package shared

type UpdateGeoMatchSetRequest struct {
	ChangeToken   string              `json:"ChangeToken"`
	GeoMatchSetID string              `json:"GeoMatchSetId"`
	Updates       []GeoMatchSetUpdate `json:"Updates"`
}
