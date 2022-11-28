import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormTableColumnDefinition } from "./formtablecolumndefinition";



// FormTableDefinition
/** 
 * Definition of a form table for OCR data extraction from images
**/
export class FormTableDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ColumnDefinitions", elemType: FormTableColumnDefinition })
  columnDefinitions?: FormTableColumnDefinition[];

  @SpeakeasyMetadata({ data: "json, name=TableID" })
  tableId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetRowHeight_Relative" })
  targetRowHeightRelative?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetTableHeight_Relative" })
  targetTableHeightRelative?: number;
}
