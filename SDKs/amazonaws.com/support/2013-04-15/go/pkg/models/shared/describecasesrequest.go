package shared

type DescribeCasesRequest struct {
	AfterTime             *string  `json:"afterTime"`
	BeforeTime            *string  `json:"beforeTime"`
	CaseIDList            []string `json:"caseIdList"`
	DisplayID             *string  `json:"displayId"`
	IncludeCommunications *bool    `json:"includeCommunications"`
	IncludeResolvedCases  *bool    `json:"includeResolvedCases"`
	Language              *string  `json:"language"`
	MaxResults            *int64   `json:"maxResults"`
	NextToken             *string  `json:"nextToken"`
}
