package shared



type Product struct {
    AdditionalImages []Image `json:"additionalImages,omitempty"`
    Aspects []Aspect `json:"aspects,omitempty"`
    Brand *string `json:"brand,omitempty"`
    Description *string `json:"description,omitempty"`
    Ean []string `json:"ean,omitempty"`
    Epid *string `json:"epid,omitempty"`
    Gtin []string `json:"gtin,omitempty"`
    Image *Image `json:"image,omitempty"`
    Isbn []string `json:"isbn,omitempty"`
    Mpn []string `json:"mpn,omitempty"`
    OtherApplicableCategoryIds []string `json:"otherApplicableCategoryIds,omitempty"`
    PrimaryCategoryID *string `json:"primaryCategoryId,omitempty"`
    ProductWebURL *string `json:"productWebUrl,omitempty"`
    Title *string `json:"title,omitempty"`
    Upc []string `json:"upc,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

