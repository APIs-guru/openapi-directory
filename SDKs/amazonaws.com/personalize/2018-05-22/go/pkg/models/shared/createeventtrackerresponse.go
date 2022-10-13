package shared

type CreateEventTrackerResponse struct {
	EventTrackerArn *string `json:"eventTrackerArn"`
	TrackingID      *string `json:"trackingId"`
}
