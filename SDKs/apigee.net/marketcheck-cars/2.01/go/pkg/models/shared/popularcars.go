package shared

type PopularCars struct {
	NewTop50  []BasePopular `json:"new_top50,omitempty"`
	UsedTop50 []BasePopular `json:"used_top50,omitempty"`
}
