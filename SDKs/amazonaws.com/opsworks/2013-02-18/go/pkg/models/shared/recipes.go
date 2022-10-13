package shared

type Recipes struct {
	Configure []string `json:"Configure"`
	Deploy    []string `json:"Deploy"`
	Setup     []string `json:"Setup"`
	Shutdown  []string `json:"Shutdown"`
	Undeploy  []string `json:"Undeploy"`
}
