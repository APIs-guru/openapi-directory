package shared

// PersistentPreferredActivity
// A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.
type PersistentPreferredActivity struct {
	Actions          []string `json:"actions,omitempty"`
	Categories       []string `json:"categories,omitempty"`
	ReceiverActivity *string  `json:"receiverActivity,omitempty"`
}
