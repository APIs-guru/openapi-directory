import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Row } from "./row";

export enum CreateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    ColumnIdView = "COLUMN_ID_VIEW"
}


// CreateRowRequest
/** 
 * Request message for TablesService.CreateRow.
**/
export class CreateRowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=row" })
  row?: Row;

  @Metadata({ data: "json, name=view" })
  view?: CreateRowRequestViewEnum;
}
