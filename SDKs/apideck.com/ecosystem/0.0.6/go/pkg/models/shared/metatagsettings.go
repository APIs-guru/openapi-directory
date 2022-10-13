package shared

type MetaTagSettings struct {
	Description               *string `json:"description"`
	DescriptionCategoryPage   *string `json:"description_category_page"`
	DescriptionCollectionPage *string `json:"description_collection_page"`
	DescriptionListingPage    *string `json:"description_listing_page"`
	Keywords                  *string `json:"keywords"`
	Title                     *string `json:"title"`
	TitlePostfix              *string `json:"title_postfix"`
}
