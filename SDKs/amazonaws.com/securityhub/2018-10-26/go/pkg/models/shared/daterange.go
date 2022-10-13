package shared

type DateRange struct {
	Unit  *DateRangeUnitEnum `json:"Unit"`
	Value *int64             `json:"Value"`
}
