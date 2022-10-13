package shared

type Action struct {
	LambdaConfiguration *LambdaConfiguration `json:"LambdaConfiguration"`
	SnsConfiguration    *SnsConfiguration    `json:"SNSConfiguration"`
}
