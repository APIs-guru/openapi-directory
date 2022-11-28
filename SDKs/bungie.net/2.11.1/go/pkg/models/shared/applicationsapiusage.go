package shared

type ApplicationsAPIUsage struct {
	APICalls          []ApplicationsSeries
	ThrottledRequests []ApplicationsSeries
}
