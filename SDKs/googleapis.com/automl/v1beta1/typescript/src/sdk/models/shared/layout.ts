import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextSegment } from "./textsegment";


export enum LayoutTextSegmentTypeEnum {
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


// Layout
/** 
 * Describes the layout information of a text_segment in the document.
**/
export class Layout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=textSegment" })
  textSegment?: TextSegment;

  @SpeakeasyMetadata({ data: "json, name=textSegmentType" })
  textSegmentType?: LayoutTextSegmentTypeEnum;
}
