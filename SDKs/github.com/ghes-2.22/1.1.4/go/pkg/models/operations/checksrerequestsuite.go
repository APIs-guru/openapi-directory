package operations

type ChecksRerequestSuitePathParams struct {
	CheckSuiteID int64  `pathParam:"style=simple,explode=false,name=check_suite_id"`
	Owner        string `pathParam:"style=simple,explode=false,name=owner"`
	Repo         string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksRerequestSuiteRequest struct {
	PathParams ChecksRerequestSuitePathParams
}

type ChecksRerequestSuiteResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ChecksRerequestSuite201ApplicationJSONObject map[string]interface{}
}
