package shared

// Api2ModelsPersonal
// Personal level info -- email, location, etc.
type Api2ModelsPersonal struct {
	Email    *string             `json:"Email,omitempty" form:"name=Email"`
	Location *Api2ModelsLocation `json:"Location,omitempty" form:"name=Location"`
}
