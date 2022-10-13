package shared

import (
	"time"
)

type FilterAdvancedDetails struct {
	CaseSensitive       *bool   `json:"caseSensitive"`
	ExtractA            *string `json:"extractA"`
	ExtractB            *string `json:"extractB"`
	FieldA              *string `json:"fieldA"`
	FieldAIndex         *int32  `json:"fieldAIndex"`
	FieldARequired      *bool   `json:"fieldARequired"`
	FieldB              *string `json:"fieldB"`
	FieldBIndex         *int32  `json:"fieldBIndex"`
	FieldBRequired      *bool   `json:"fieldBRequired"`
	OutputConstructor   *string `json:"outputConstructor"`
	OutputToField       *string `json:"outputToField"`
	OutputToFieldIndex  *int32  `json:"outputToFieldIndex"`
	OverrideOutputField *bool   `json:"overrideOutputField"`
}

type FilterLowercaseDetails struct {
	Field      *string `json:"field"`
	FieldIndex *int32  `json:"fieldIndex"`
}

type FilterParentLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type FilterSearchAndReplaceDetails struct {
	CaseSensitive *bool   `json:"caseSensitive"`
	Field         *string `json:"field"`
	FieldIndex    *int32  `json:"fieldIndex"`
	ReplaceString *string `json:"replaceString"`
	SearchString  *string `json:"searchString"`
}

type FilterUppercaseDetails struct {
	Field      *string `json:"field"`
	FieldIndex *int32  `json:"fieldIndex"`
}

type Filter struct {
	AccountID               *string                        `json:"accountId"`
	AdvancedDetails         *FilterAdvancedDetails         `json:"advancedDetails"`
	Created                 *time.Time                     `json:"created"`
	ExcludeDetails          *FilterExpression              `json:"excludeDetails"`
	ID                      *string                        `json:"id"`
	IncludeDetails          *FilterExpression              `json:"includeDetails"`
	Kind                    *string                        `json:"kind"`
	LowercaseDetails        *FilterLowercaseDetails        `json:"lowercaseDetails"`
	Name                    *string                        `json:"name"`
	ParentLink              *FilterParentLink              `json:"parentLink"`
	SearchAndReplaceDetails *FilterSearchAndReplaceDetails `json:"searchAndReplaceDetails"`
	SelfLink                *string                        `json:"selfLink"`
	Type                    *string                        `json:"type"`
	Updated                 *time.Time                     `json:"updated"`
	UppercaseDetails        *FilterUppercaseDetails        `json:"uppercaseDetails"`
}
