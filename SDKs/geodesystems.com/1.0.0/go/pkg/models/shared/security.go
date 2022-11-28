package shared

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
