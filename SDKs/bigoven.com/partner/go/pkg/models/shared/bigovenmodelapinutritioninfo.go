package shared

type BigOvenModelAPINutritionInfo struct {
	CaloriesFromFat   *float64 `json:"CaloriesFromFat,omitempty"`
	Cholesterol       *float64 `json:"Cholesterol,omitempty"`
	CholesterolPct    *float64 `json:"CholesterolPct,omitempty"`
	DietaryFiber      *float64 `json:"DietaryFiber,omitempty"`
	DietaryFiberPct   *float64 `json:"DietaryFiberPct,omitempty"`
	MonoFat           *float64 `json:"MonoFat,omitempty"`
	PolyFat           *float64 `json:"PolyFat,omitempty"`
	Potassium         *float64 `json:"Potassium,omitempty"`
	PotassiumPct      *float64 `json:"PotassiumPct,omitempty"`
	Protein           *float64 `json:"Protein,omitempty"`
	ProteinPct        *float64 `json:"ProteinPct,omitempty"`
	SatFat            *float64 `json:"SatFat,omitempty"`
	SatFatPct         *float64 `json:"SatFatPct,omitempty"`
	SingularYieldUnit *string  `json:"SingularYieldUnit,omitempty"`
	Sodium            *float64 `json:"Sodium,omitempty"`
	SodiumPct         *float64 `json:"SodiumPct,omitempty"`
	Sugar             *float64 `json:"Sugar,omitempty"`
	TotalCalories     *float64 `json:"TotalCalories,omitempty"`
	TotalCarbs        *float64 `json:"TotalCarbs,omitempty"`
	TotalCarbsPct     *float64 `json:"TotalCarbsPct,omitempty"`
	TotalFat          *float64 `json:"TotalFat,omitempty"`
	TotalFatPct       *float64 `json:"TotalFatPct,omitempty"`
	TransFat          *float64 `json:"TransFat,omitempty"`
}
