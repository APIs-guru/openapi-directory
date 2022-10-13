package shared

type SetEurekaInfoRequest struct {
	Name     string    `json:"name"`
	OptIn    OptIn1    `json:"opt_in"`
	Settings Settings1 `json:"settings"`
}
