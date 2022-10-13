package shared

import (
	"time"
)

type Product struct {
	AgreementName             *string                  `json:"agreement_name"`
	ApplicationWebsite        *string                  `json:"application_website"`
	CreditsRemaining          *int32                   `json:"credits_remaining"`
	DownloadLimit             *int32                   `json:"download_limit"`
	DownloadLimitDuration     *string                  `json:"download_limit_duration"`
	DownloadLimitResetUtcDate *time.Time               `json:"download_limit_reset_utc_date"`
	DownloadRequirements      *DownloadRequirements    `json:"download_requirements"`
	DownloadsRemaining        *int32                   `json:"downloads_remaining"`
	ExpirationUtcDate         *time.Time               `json:"expiration_utc_date"`
	ID                        *int32                   `json:"id"`
	ImagepackResolution       *string                  `json:"imagepack_resolution"`
	Name                      *string                  `json:"name"`
	Overage                   *OverageDetails          `json:"overage"`
	Status                    *ProductStatusEnum       `json:"status"`
	TeamCredits               *int32                   `json:"team_credits"`
	Type                      *ProductTypeResponseEnum `json:"type"`
}
