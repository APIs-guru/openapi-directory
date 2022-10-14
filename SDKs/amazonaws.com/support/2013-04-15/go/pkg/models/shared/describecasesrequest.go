package shared

type DescribeCasesRequest struct {
	AfterTime             *string  `json:"afterTime,omitempty"`
	BeforeTime            *string  `json:"beforeTime,omitempty"`
	CaseIDList            []string `json:"caseIdList,omitempty"`
	DisplayID             *string  `json:"displayId,omitempty"`
	IncludeCommunications *bool    `json:"includeCommunications,omitempty"`
	IncludeResolvedCases  *bool    `json:"includeResolvedCases,omitempty"`
	Language              *string  `json:"language,omitempty"`
	MaxResults            *int64   `json:"maxResults,omitempty"`
	NextToken             *string  `json:"nextToken,omitempty"`
}
