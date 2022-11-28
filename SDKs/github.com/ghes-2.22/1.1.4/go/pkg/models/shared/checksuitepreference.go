package shared

type CheckSuitePreferencePreferencesAutoTriggerChecks struct {
	AppID   int64 `json:"app_id"`
	Setting bool  `json:"setting"`
}

type CheckSuitePreferencePreferences struct {
	AutoTriggerChecks []CheckSuitePreferencePreferencesAutoTriggerChecks `json:"auto_trigger_checks,omitempty"`
}

// CheckSuitePreference
// Check suite configuration preferences for a repository.
type CheckSuitePreference struct {
	Preferences CheckSuitePreferencePreferences `json:"preferences"`
	Repository  MinimalRepository               `json:"repository"`
}
