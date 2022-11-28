package shared

// HitLayoutParameter
//
//	The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT.
type HitLayoutParameter struct {
	Name  string `json:"Name"`
	Value string `json:"Value"`
}
