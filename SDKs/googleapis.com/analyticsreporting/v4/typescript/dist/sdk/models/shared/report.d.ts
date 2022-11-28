import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnHeader } from "./columnheader";
import { ReportData } from "./reportdata";
/**
 * The data response corresponding to the request.
**/
export declare class Report extends SpeakeasyBase {
    columnHeader?: ColumnHeader;
    data?: ReportData;
    nextPageToken?: string;
}
