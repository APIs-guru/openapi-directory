package shared



type MetaTagSettings struct {
    Description *string `json:"description,omitempty"`
    DescriptionCategoryPage *string `json:"description_category_page,omitempty"`
    DescriptionCollectionPage *string `json:"description_collection_page,omitempty"`
    DescriptionListingPage *string `json:"description_listing_page,omitempty"`
    Keywords *string `json:"keywords,omitempty"`
    Title *string `json:"title,omitempty"`
    TitlePostfix *string `json:"title_postfix,omitempty"`
    
}

