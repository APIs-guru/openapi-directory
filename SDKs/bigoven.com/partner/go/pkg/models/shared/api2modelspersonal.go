package shared

type Api2ModelsPersonal struct {
	Email    *string             `json:"Email" form:"name=Email"`
	Location *Api2ModelsLocation `json:"Location" form:"name=Location"`
}
