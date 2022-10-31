package shared

type StringFilterMatchTypeEnum string

const (
	StringFilterMatchTypeEnumMatchTypeUnspecified StringFilterMatchTypeEnum = "MATCH_TYPE_UNSPECIFIED"
	StringFilterMatchTypeEnumExact                StringFilterMatchTypeEnum = "EXACT"
	StringFilterMatchTypeEnumBeginsWith           StringFilterMatchTypeEnum = "BEGINS_WITH"
	StringFilterMatchTypeEnumEndsWith             StringFilterMatchTypeEnum = "ENDS_WITH"
	StringFilterMatchTypeEnumContains             StringFilterMatchTypeEnum = "CONTAINS"
	StringFilterMatchTypeEnumFullRegexp           StringFilterMatchTypeEnum = "FULL_REGEXP"
	StringFilterMatchTypeEnumPartialRegexp        StringFilterMatchTypeEnum = "PARTIAL_REGEXP"
)

type StringFilter struct {
	CaseSensitive *bool                      `json:"caseSensitive,omitempty"`
	MatchType     *StringFilterMatchTypeEnum `json:"matchType,omitempty"`
	Value         *string                    `json:"value,omitempty"`
}
