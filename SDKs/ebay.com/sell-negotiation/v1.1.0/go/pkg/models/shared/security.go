package shared

type SchemeAPIAuth struct {
	Authorization string `security:"name=Authorization"`
}
