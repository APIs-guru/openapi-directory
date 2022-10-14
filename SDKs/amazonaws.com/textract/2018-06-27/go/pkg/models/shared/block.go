package shared

type Block struct {
	BlockType       *BlockTypeEnum       `json:"BlockType,omitempty"`
	ColumnIndex     *int64               `json:"ColumnIndex,omitempty"`
	ColumnSpan      *int64               `json:"ColumnSpan,omitempty"`
	Confidence      *float32             `json:"Confidence,omitempty"`
	EntityTypes     []EntityTypeEnum     `json:"EntityTypes,omitempty"`
	Geometry        *Geometry            `json:"Geometry,omitempty"`
	ID              *string              `json:"Id,omitempty"`
	Page            *int64               `json:"Page,omitempty"`
	Relationships   []Relationship       `json:"Relationships,omitempty"`
	RowIndex        *int64               `json:"RowIndex,omitempty"`
	RowSpan         *int64               `json:"RowSpan,omitempty"`
	SelectionStatus *SelectionStatusEnum `json:"SelectionStatus,omitempty"`
	Text            *string              `json:"Text,omitempty"`
	TextType        *TextTypeEnum        `json:"TextType,omitempty"`
}
