package shared

type ConfigDhcp struct {
	AddOptions *string `json:"add_options"`
	Classid    *string `json:"classid"`
	Hwaddr     *string `json:"hwaddr"`
	Script     *string `json:"script"`
}
