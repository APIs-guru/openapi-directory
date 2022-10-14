package shared

type Api2ModelsPersonal struct {
	Email    *string             `json:"Email,omitempty" form:"name=Email"`
	Location *Api2ModelsLocation `json:"Location,omitempty" form:"name=Location"`
}
