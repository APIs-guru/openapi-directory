package shared

type PutLogEventsResponse struct {
	NextSequenceToken     *string                `json:"nextSequenceToken"`
	RejectedLogEventsInfo *RejectedLogEventsInfo `json:"rejectedLogEventsInfo"`
}
