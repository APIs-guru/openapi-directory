package shared

type Insight struct {
	Filters          AwsSecurityFindingFilters `json:"Filters"`
	GroupByAttribute string                    `json:"GroupByAttribute"`
	InsightArn       string                    `json:"InsightArn"`
	Name             string                    `json:"Name"`
}
