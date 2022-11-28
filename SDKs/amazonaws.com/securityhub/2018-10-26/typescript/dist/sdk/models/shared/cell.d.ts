import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.
**/
export declare class Cell extends SpeakeasyBase {
    cellReference?: string;
    column?: number;
    columnName?: string;
    row?: number;
}
