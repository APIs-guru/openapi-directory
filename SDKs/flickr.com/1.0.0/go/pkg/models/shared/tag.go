package shared

type Tag struct {
	Content    *string `json:"_content"`
	Author     *string `json:"author"`
	Authorname *string `json:"authorname"`
	ID         *string `json:"id"`
	MachineTag *bool   `json:"machine_tag"`
	Raw        *string `json:"raw"`
}
