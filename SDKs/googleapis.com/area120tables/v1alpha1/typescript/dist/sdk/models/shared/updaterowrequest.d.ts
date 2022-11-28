import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
export declare enum UpdateRowRequestViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
/**
 * Request message for TablesService.UpdateRow.
**/
export declare class UpdateRowRequest extends SpeakeasyBase {
    row?: Row;
    updateMask?: string;
    view?: UpdateRowRequestViewEnum;
}
