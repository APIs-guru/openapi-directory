import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormTableColumnDefinition
/** 
 * Definition of a column within a table for OCR data extraction from images
**/
export class FormTableColumnDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowNumericDigits" })
  allowNumericDigits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AnchorMode" })
  anchorMode?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnID" })
  columnId?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumCharacterCount" })
  minimumCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TopAnchor" })
  topAnchor?: string;
}
