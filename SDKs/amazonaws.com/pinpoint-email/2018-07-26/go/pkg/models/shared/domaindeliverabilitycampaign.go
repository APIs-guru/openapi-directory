package shared

import (
"time")

type DomainDeliverabilityCampaign struct {
    CampaignID *string `json:"CampaignId,omitempty"`
    DeleteRate *float64 `json:"DeleteRate,omitempty"`
    Esps []string `json:"Esps,omitempty"`
    FirstSeenDateTime *time.Time `json:"FirstSeenDateTime,omitempty"`
    FromAddress *string `json:"FromAddress,omitempty"`
    ImageURL *string `json:"ImageUrl,omitempty"`
    InboxCount *int64 `json:"InboxCount,omitempty"`
    LastSeenDateTime *time.Time `json:"LastSeenDateTime,omitempty"`
    ProjectedVolume *int64 `json:"ProjectedVolume,omitempty"`
    ReadDeleteRate *float64 `json:"ReadDeleteRate,omitempty"`
    ReadRate *float64 `json:"ReadRate,omitempty"`
    SendingIps []string `json:"SendingIps,omitempty"`
    SpamCount *int64 `json:"SpamCount,omitempty"`
    Subject *string `json:"Subject,omitempty"`
    
}

