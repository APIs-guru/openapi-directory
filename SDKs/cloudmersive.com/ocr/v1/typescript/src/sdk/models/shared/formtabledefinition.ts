import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FormTableColumnDefinition } from "./formtablecolumndefinition";


// FormTableDefinition
/** 
 * Definition of a form table for OCR data extraction from images
**/
export class FormTableDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=ColumnDefinitions", elemType: shared.FormTableColumnDefinition })
  columnDefinitions?: FormTableColumnDefinition[];

  @Metadata({ data: "json, name=TableID" })
  tableId?: string;

  @Metadata({ data: "json, name=TargetRowHeight_Relative" })
  targetRowHeightRelative?: number;

  @Metadata({ data: "json, name=TargetTableHeight_Relative" })
  targetTableHeightRelative?: number;
}
