import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Row } from "./row";
/**
 * Response message for TablesService.ListRows.
**/
export declare class ListRowsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    rows?: Row[];
}
