package shared

import (
	"time"
)

type DomainDeliverabilityCampaign struct {
	CampaignID        *string    `json:"CampaignId"`
	DeleteRate        *float64   `json:"DeleteRate"`
	Esps              []string   `json:"Esps"`
	FirstSeenDateTime *time.Time `json:"FirstSeenDateTime"`
	FromAddress       *string    `json:"FromAddress"`
	ImageURL          *string    `json:"ImageUrl"`
	InboxCount        *int64     `json:"InboxCount"`
	LastSeenDateTime  *time.Time `json:"LastSeenDateTime"`
	ProjectedVolume   *int64     `json:"ProjectedVolume"`
	ReadDeleteRate    *float64   `json:"ReadDeleteRate"`
	ReadRate          *float64   `json:"ReadRate"`
	SendingIps        []string   `json:"SendingIps"`
	SpamCount         *int64     `json:"SpamCount"`
	Subject           *string    `json:"Subject"`
}
