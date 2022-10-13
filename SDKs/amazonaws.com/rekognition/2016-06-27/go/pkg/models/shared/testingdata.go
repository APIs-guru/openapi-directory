package shared

type TestingData struct {
	Assets     []Asset `json:"Assets"`
	AutoCreate *bool   `json:"AutoCreate"`
}
