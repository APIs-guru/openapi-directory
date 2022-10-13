package shared

type RvBuild struct {
	Area         *string `json:"area"`
	Class        *string `json:"class"`
	Engine       *string `json:"engine"`
	FuelType     *string `json:"fuel_type"`
	Gvwr         *string `json:"gvwr"`
	Length       *string `json:"length"`
	MadeIn       *string `json:"made_in"`
	Make         *string `json:"make"`
	Model        *string `json:"model"`
	Sleeps       *string `json:"sleeps"`
	Slideouts    *string `json:"slideouts"`
	Transmission *string `json:"transmission"`
	Year         *int64  `json:"year"`
}
