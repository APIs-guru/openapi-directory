package shared

type ErrorError struct {
	Code    string `json:"code"`
	ID      string `json:"id"`
	Message string `json:"message"`
}

type Error struct {
	Error *ErrorError `json:"error"`
}
