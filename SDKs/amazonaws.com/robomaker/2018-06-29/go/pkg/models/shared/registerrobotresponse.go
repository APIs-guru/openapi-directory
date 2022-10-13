package shared

type RegisterRobotResponse struct {
	Fleet *string `json:"fleet"`
	Robot *string `json:"robot"`
}
