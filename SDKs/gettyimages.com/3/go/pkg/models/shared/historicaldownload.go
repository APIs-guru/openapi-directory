package shared

import (
	"time"
)

type HistoricalDownload struct {
	AgreementName   *string          `json:"agreement_name"`
	AssetType       *string          `json:"asset_type"`
	DateDownloaded  *time.Time       `json:"date_downloaded"`
	Dimensions      *Dimensions      `json:"dimensions"`
	DownloadDetails *DownloadDetails `json:"download_details"`
	DownloadSource  *string          `json:"download_source"`
	ID              *string          `json:"id"`
	ProductID       *int32           `json:"product_id"`
	ProductType     *string          `json:"product_type"`
	SizeName        *string          `json:"size_name"`
	ThumbURI        *string          `json:"thumb_uri"`
	User            *User            `json:"user"`
}
