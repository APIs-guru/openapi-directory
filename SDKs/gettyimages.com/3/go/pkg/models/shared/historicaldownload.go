package shared

import (
	"time"
)

type HistoricalDownload struct {
	AgreementName   *string          `json:"agreement_name,omitempty"`
	AssetType       *string          `json:"asset_type,omitempty"`
	DateDownloaded  *time.Time       `json:"date_downloaded,omitempty"`
	Dimensions      *Dimensions      `json:"dimensions,omitempty"`
	DownloadDetails *DownloadDetails `json:"download_details,omitempty"`
	DownloadSource  *string          `json:"download_source,omitempty"`
	ID              *string          `json:"id,omitempty"`
	ProductID       *int32           `json:"product_id,omitempty"`
	ProductType     *string          `json:"product_type,omitempty"`
	SizeName        *string          `json:"size_name,omitempty"`
	ThumbURI        *string          `json:"thumb_uri,omitempty"`
	User            *User            `json:"user,omitempty"`
}
