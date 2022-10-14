package shared

import (
	"time"
)

type Product struct {
	AgreementName             *string                  `json:"agreement_name,omitempty"`
	ApplicationWebsite        *string                  `json:"application_website,omitempty"`
	CreditsRemaining          *int32                   `json:"credits_remaining,omitempty"`
	DownloadLimit             *int32                   `json:"download_limit,omitempty"`
	DownloadLimitDuration     *string                  `json:"download_limit_duration,omitempty"`
	DownloadLimitResetUtcDate *time.Time               `json:"download_limit_reset_utc_date,omitempty"`
	DownloadRequirements      *DownloadRequirements    `json:"download_requirements,omitempty"`
	DownloadsRemaining        *int32                   `json:"downloads_remaining,omitempty"`
	ExpirationUtcDate         *time.Time               `json:"expiration_utc_date,omitempty"`
	ID                        *int32                   `json:"id,omitempty"`
	ImagepackResolution       *string                  `json:"imagepack_resolution,omitempty"`
	Name                      *string                  `json:"name,omitempty"`
	Overage                   *OverageDetails          `json:"overage,omitempty"`
	Status                    *ProductStatusEnum       `json:"status,omitempty"`
	TeamCredits               *int32                   `json:"team_credits,omitempty"`
	Type                      *ProductTypeResponseEnum `json:"type,omitempty"`
}
