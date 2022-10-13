package shared

type TagLogGroupRequest struct {
	LogGroupName string            `json:"logGroupName"`
	Tags         map[string]string `json:"tags"`
}
