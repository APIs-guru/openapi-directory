package shared

type SchemeProfileAuth struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeResetPasswordAuth struct {
	APIKey string `security:"name=authorization"`
}

type SchemeVerifyEmailAuth struct {
	APIKey string `security:"name=authorization"`
}

type SchemeAccountAuth struct {
	Authorization string `security:"name=Authorization"`
}
