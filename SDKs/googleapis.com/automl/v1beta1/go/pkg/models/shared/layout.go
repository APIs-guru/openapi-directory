package shared

type LayoutTextSegmentTypeEnum string

const (
	LayoutTextSegmentTypeEnumTextSegmentTypeUnspecified LayoutTextSegmentTypeEnum = "TEXT_SEGMENT_TYPE_UNSPECIFIED"
	LayoutTextSegmentTypeEnumToken                      LayoutTextSegmentTypeEnum = "TOKEN"
	LayoutTextSegmentTypeEnumParagraph                  LayoutTextSegmentTypeEnum = "PARAGRAPH"
	LayoutTextSegmentTypeEnumFormField                  LayoutTextSegmentTypeEnum = "FORM_FIELD"
	LayoutTextSegmentTypeEnumFormFieldName              LayoutTextSegmentTypeEnum = "FORM_FIELD_NAME"
	LayoutTextSegmentTypeEnumFormFieldContents          LayoutTextSegmentTypeEnum = "FORM_FIELD_CONTENTS"
	LayoutTextSegmentTypeEnumTable                      LayoutTextSegmentTypeEnum = "TABLE"
	LayoutTextSegmentTypeEnumTableHeader                LayoutTextSegmentTypeEnum = "TABLE_HEADER"
	LayoutTextSegmentTypeEnumTableRow                   LayoutTextSegmentTypeEnum = "TABLE_ROW"
	LayoutTextSegmentTypeEnumTableCell                  LayoutTextSegmentTypeEnum = "TABLE_CELL"
)

type Layout struct {
	BoundingPoly    *BoundingPoly              `json:"boundingPoly"`
	PageNumber      *int32                     `json:"pageNumber"`
	TextSegment     *TextSegment               `json:"textSegment"`
	TextSegmentType *LayoutTextSegmentTypeEnum `json:"textSegmentType"`
}
