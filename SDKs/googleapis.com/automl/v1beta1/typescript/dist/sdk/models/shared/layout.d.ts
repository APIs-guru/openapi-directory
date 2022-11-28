import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextSegment } from "./textsegment";
export declare enum LayoutTextSegmentTypeEnum {
    TextSegmentTypeUnspecified = "TEXT_SEGMENT_TYPE_UNSPECIFIED",
    Token = "TOKEN",
    Paragraph = "PARAGRAPH",
    FormField = "FORM_FIELD",
    FormFieldName = "FORM_FIELD_NAME",
    FormFieldContents = "FORM_FIELD_CONTENTS",
    Table = "TABLE",
    TableHeader = "TABLE_HEADER",
    TableRow = "TABLE_ROW",
    TableCell = "TABLE_CELL"
}
/**
 * Describes the layout information of a text_segment in the document.
**/
export declare class Layout extends SpeakeasyBase {
    boundingPoly?: BoundingPoly;
    pageNumber?: number;
    textSegment?: TextSegment;
    textSegmentType?: LayoutTextSegmentTypeEnum;
}
