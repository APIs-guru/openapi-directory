package shared

type SchemeAPITokenBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
