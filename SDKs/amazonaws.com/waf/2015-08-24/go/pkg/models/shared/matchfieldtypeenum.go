package shared




type MatchFieldTypeEnum string

const (
    MatchFieldTypeEnumURI MatchFieldTypeEnum = "URI"
MatchFieldTypeEnumQueryString MatchFieldTypeEnum = "QUERY_STRING"
MatchFieldTypeEnumHeader MatchFieldTypeEnum = "HEADER"
MatchFieldTypeEnumMethod MatchFieldTypeEnum = "METHOD"
MatchFieldTypeEnumBody MatchFieldTypeEnum = "BODY"
MatchFieldTypeEnumSingleQueryArg MatchFieldTypeEnum = "SINGLE_QUERY_ARG"
MatchFieldTypeEnumAllQueryArgs MatchFieldTypeEnum = "ALL_QUERY_ARGS"
)


