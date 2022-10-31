package shared

import (
"time")

type FilterAdvancedDetails struct {
    CaseSensitive *bool `json:"caseSensitive,omitempty"`
    ExtractA *string `json:"extractA,omitempty"`
    ExtractB *string `json:"extractB,omitempty"`
    FieldA *string `json:"fieldA,omitempty"`
    FieldAIndex *int32 `json:"fieldAIndex,omitempty"`
    FieldARequired *bool `json:"fieldARequired,omitempty"`
    FieldB *string `json:"fieldB,omitempty"`
    FieldBIndex *int32 `json:"fieldBIndex,omitempty"`
    FieldBRequired *bool `json:"fieldBRequired,omitempty"`
    OutputConstructor *string `json:"outputConstructor,omitempty"`
    OutputToField *string `json:"outputToField,omitempty"`
    OutputToFieldIndex *int32 `json:"outputToFieldIndex,omitempty"`
    OverrideOutputField *bool `json:"overrideOutputField,omitempty"`
    
}

type FilterLowercaseDetails struct {
    Field *string `json:"field,omitempty"`
    FieldIndex *int32 `json:"fieldIndex,omitempty"`
    
}

type FilterParentLink struct {
    Href *string `json:"href,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type FilterSearchAndReplaceDetails struct {
    CaseSensitive *bool `json:"caseSensitive,omitempty"`
    Field *string `json:"field,omitempty"`
    FieldIndex *int32 `json:"fieldIndex,omitempty"`
    ReplaceString *string `json:"replaceString,omitempty"`
    SearchString *string `json:"searchString,omitempty"`
    
}

type FilterUppercaseDetails struct {
    Field *string `json:"field,omitempty"`
    FieldIndex *int32 `json:"fieldIndex,omitempty"`
    
}

type Filter struct {
    AccountID *string `json:"accountId,omitempty"`
    AdvancedDetails *FilterAdvancedDetails `json:"advancedDetails,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    ExcludeDetails *FilterExpression `json:"excludeDetails,omitempty"`
    ID *string `json:"id,omitempty"`
    IncludeDetails *FilterExpression `json:"includeDetails,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LowercaseDetails *FilterLowercaseDetails `json:"lowercaseDetails,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentLink *FilterParentLink `json:"parentLink,omitempty"`
    SearchAndReplaceDetails *FilterSearchAndReplaceDetails `json:"searchAndReplaceDetails,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Type *string `json:"type,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    UppercaseDetails *FilterUppercaseDetails `json:"uppercaseDetails,omitempty"`
    
}

