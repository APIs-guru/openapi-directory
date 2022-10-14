package shared

import (
	"time"
)

type PreviousAssetPurchase struct {
	AssetID         *string    `json:"asset_id,omitempty"`
	AssetType       *string    `json:"asset_type,omitempty"`
	DatePurchased   *time.Time `json:"date_purchased,omitempty"`
	DownloadURI     *string    `json:"download_uri,omitempty"`
	FileSizeInBytes *string    `json:"file_size_in_bytes,omitempty"`
	LicenseModel    *string    `json:"license_model,omitempty"`
	OrderID         *string    `json:"order_id,omitempty"`
	PurchasedBy     *string    `json:"purchased_by,omitempty"`
	SizeName        *string    `json:"size_name,omitempty"`
	ThumbURI        *string    `json:"thumb_uri,omitempty"`
}
