import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";


export enum UpdateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}


// UpdateRowRequest
/** 
 * Request message for TablesService.UpdateRow.
**/
export class UpdateRowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=row" })
  row?: Row;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: UpdateRowRequestViewEnum;
}
