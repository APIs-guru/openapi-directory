package shared

type PersistentPreferredActivity struct {
	Actions          []string `json:"actions"`
	Categories       []string `json:"categories"`
	ReceiverActivity *string  `json:"receiverActivity"`
}
