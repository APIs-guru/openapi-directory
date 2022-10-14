package shared

type CreateEventTrackerResponse struct {
	EventTrackerArn *string `json:"eventTrackerArn,omitempty"`
	TrackingID      *string `json:"trackingId,omitempty"`
}
