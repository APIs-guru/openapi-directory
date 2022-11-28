package shared

// Block
// <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html">How Amazon Textract Works</a>.</p>
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
