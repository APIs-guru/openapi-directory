package shared

type Block struct {
	BlockType       *BlockTypeEnum       `json:"BlockType"`
	ColumnIndex     *int64               `json:"ColumnIndex"`
	ColumnSpan      *int64               `json:"ColumnSpan"`
	Confidence      *float32             `json:"Confidence"`
	EntityTypes     []EntityTypeEnum     `json:"EntityTypes"`
	Geometry        *Geometry            `json:"Geometry"`
	ID              *string              `json:"Id"`
	Page            *int64               `json:"Page"`
	Relationships   []Relationship       `json:"Relationships"`
	RowIndex        *int64               `json:"RowIndex"`
	RowSpan         *int64               `json:"RowSpan"`
	SelectionStatus *SelectionStatusEnum `json:"SelectionStatus"`
	Text            *string              `json:"Text"`
	TextType        *TextTypeEnum        `json:"TextType"`
}
