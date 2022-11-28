package shared

// ImageResponseCard
// <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
type ImageResponseCard struct {
	Buttons  []Button `json:"buttons,omitempty"`
	ImageURL *string  `json:"imageUrl,omitempty"`
	Subtitle *string  `json:"subtitle,omitempty"`
	Title    string   `json:"title"`
}
