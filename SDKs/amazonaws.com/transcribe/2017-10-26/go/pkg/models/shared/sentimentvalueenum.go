package shared

type SentimentValueEnum string

const (
	SentimentValueEnumPositive SentimentValueEnum = "POSITIVE"
	SentimentValueEnumNegative SentimentValueEnum = "NEGATIVE"
	SentimentValueEnumNeutral  SentimentValueEnum = "NEUTRAL"
	SentimentValueEnumMixed    SentimentValueEnum = "MIXED"
)
