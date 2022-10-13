package shared

type NavContent struct {
	ImageType *string   `json:"imageType"`
	List      *ItemList `json:"list"`
	Title     *string   `json:"title"`
}
