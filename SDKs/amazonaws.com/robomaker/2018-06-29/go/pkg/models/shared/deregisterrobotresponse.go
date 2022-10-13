package shared

type DeregisterRobotResponse struct {
	Fleet *string `json:"fleet"`
	Robot *string `json:"robot"`
}
