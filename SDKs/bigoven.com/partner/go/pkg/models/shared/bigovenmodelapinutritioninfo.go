package shared

type BigOvenModelAPINutritionInfo struct {
	CaloriesFromFat   *float64 `json:"CaloriesFromFat"`
	Cholesterol       *float64 `json:"Cholesterol"`
	CholesterolPct    *float64 `json:"CholesterolPct"`
	DietaryFiber      *float64 `json:"DietaryFiber"`
	DietaryFiberPct   *float64 `json:"DietaryFiberPct"`
	MonoFat           *float64 `json:"MonoFat"`
	PolyFat           *float64 `json:"PolyFat"`
	Potassium         *float64 `json:"Potassium"`
	PotassiumPct      *float64 `json:"PotassiumPct"`
	Protein           *float64 `json:"Protein"`
	ProteinPct        *float64 `json:"ProteinPct"`
	SatFat            *float64 `json:"SatFat"`
	SatFatPct         *float64 `json:"SatFatPct"`
	SingularYieldUnit *string  `json:"SingularYieldUnit"`
	Sodium            *float64 `json:"Sodium"`
	SodiumPct         *float64 `json:"SodiumPct"`
	Sugar             *float64 `json:"Sugar"`
	TotalCalories     *float64 `json:"TotalCalories"`
	TotalCarbs        *float64 `json:"TotalCarbs"`
	TotalCarbsPct     *float64 `json:"TotalCarbsPct"`
	TotalFat          *float64 `json:"TotalFat"`
	TotalFatPct       *float64 `json:"TotalFatPct"`
	TransFat          *float64 `json:"TransFat"`
}
