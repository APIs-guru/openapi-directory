package shared

import (
	"time"
)

type PreviousAssetPurchase struct {
	AssetID         *string    `json:"asset_id"`
	AssetType       *string    `json:"asset_type"`
	DatePurchased   *time.Time `json:"date_purchased"`
	DownloadURI     *string    `json:"download_uri"`
	FileSizeInBytes *string    `json:"file_size_in_bytes"`
	LicenseModel    *string    `json:"license_model"`
	OrderID         *string    `json:"order_id"`
	PurchasedBy     *string    `json:"purchased_by"`
	SizeName        *string    `json:"size_name"`
	ThumbURI        *string    `json:"thumb_uri"`
}
