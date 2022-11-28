import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
**/
export declare class Cell extends SpeakeasyBase {
    cellReference?: string;
    column?: number;
    columnName?: string;
    row?: number;
}
