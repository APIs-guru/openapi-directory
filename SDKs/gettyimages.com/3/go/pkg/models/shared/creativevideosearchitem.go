package shared

import (
"time")

type CreativeVideoSearchItem struct {
    AllowedUse *AllowedUse `json:"allowed_use,omitempty"`
    Artist *string `json:"artist,omitempty"`
    AssetFamily *string `json:"asset_family,omitempty"`
    Caption *string `json:"caption,omitempty"`
    ClipLength *string `json:"clip_length,omitempty"`
    CollectionCode *string `json:"collection_code,omitempty"`
    CollectionID *int32 `json:"collection_id,omitempty"`
    CollectionName *string `json:"collection_name,omitempty"`
    ColorType *string `json:"color_type,omitempty"`
    Copyright *string `json:"copyright,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DisplaySizes []VideoSearchItemDisplaySize `json:"display_sizes,omitempty"`
    DownloadProduct *string `json:"download_product,omitempty"`
    Era *string `json:"era,omitempty"`
    EventIds []int32 `json:"event_ids,omitempty"`
    ID *string `json:"id,omitempty"`
    IstockLicenses []IStockLicense `json:"istock_licenses,omitempty"`
    Keywords []Keyword `json:"keywords,omitempty"`
    LargestDownloads []Download `json:"largest_downloads,omitempty"`
    LicenseModel *string `json:"license_model,omitempty"`
    MasteredTo *string `json:"mastered_to,omitempty"`
    OriginallyShotOn *string `json:"originally_shot_on,omitempty"`
    ProductTypes []string `json:"product_types,omitempty"`
    ReferralDestinations []ReferralDestination `json:"referral_destinations,omitempty"`
    ShotSpeed *string `json:"shot_speed,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

