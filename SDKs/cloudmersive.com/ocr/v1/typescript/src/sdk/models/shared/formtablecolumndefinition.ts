import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FormTableColumnDefinition
/** 
 * Definition of a column within a table for OCR data extraction from images
**/
export class FormTableColumnDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowNumericDigits" })
  allowNumericDigits?: boolean;

  @Metadata({ data: "json, name=AnchorMode" })
  anchorMode?: string;

  @Metadata({ data: "json, name=ColumnID" })
  columnId?: string;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=MinimumCharacterCount" })
  minimumCharacterCount?: number;

  @Metadata({ data: "json, name=TopAnchor" })
  topAnchor?: string;
}
