package shared




type StartSelectorTypeEnum string

const (
    StartSelectorTypeEnumFragmentNumber StartSelectorTypeEnum = "FRAGMENT_NUMBER"
StartSelectorTypeEnumServerTimestamp StartSelectorTypeEnum = "SERVER_TIMESTAMP"
StartSelectorTypeEnumProducerTimestamp StartSelectorTypeEnum = "PRODUCER_TIMESTAMP"
StartSelectorTypeEnumNow StartSelectorTypeEnum = "NOW"
StartSelectorTypeEnumEarliest StartSelectorTypeEnum = "EARLIEST"
StartSelectorTypeEnumContinuationToken StartSelectorTypeEnum = "CONTINUATION_TOKEN"
)


