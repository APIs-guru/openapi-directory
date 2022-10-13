package shared

type ImageResponseCard struct {
	Buttons  []Button `json:"buttons"`
	ImageURL *string  `json:"imageUrl"`
	Subtitle *string  `json:"subtitle"`
	Title    string   `json:"title"`
}
