import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Row } from "./row";

export enum UpdateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    ColumnIdView = "COLUMN_ID_VIEW"
}


// UpdateRowRequest
/** 
 * Request message for TablesService.UpdateRow.
**/
export class UpdateRowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=row" })
  row?: Row;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "json, name=view" })
  view?: UpdateRowRequestViewEnum;
}
