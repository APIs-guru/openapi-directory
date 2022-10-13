package shared

type DataSource struct {
	Arn          *string `json:"Arn"`
	DatabaseName *string `json:"DatabaseName"`
	Type         *string `json:"Type"`
}
