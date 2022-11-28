import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
export declare enum CreateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
/**
 * Request message for TablesService.CreateRow.
**/
export declare class CreateRowRequest extends SpeakeasyBase {
    parent?: string;
    row?: Row;
    view?: CreateRowRequestViewEnum;
}
