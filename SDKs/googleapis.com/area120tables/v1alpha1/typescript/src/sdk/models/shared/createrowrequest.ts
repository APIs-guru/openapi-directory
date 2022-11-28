import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";


export enum CreateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}


// CreateRowRequest
/** 
 * Request message for TablesService.CreateRow.
**/
export class CreateRowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=row" })
  row?: Row;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: CreateRowRequestViewEnum;
}
