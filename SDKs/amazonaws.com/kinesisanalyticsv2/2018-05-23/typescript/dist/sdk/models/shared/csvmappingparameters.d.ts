import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter: </p> <p> <code>"name1", "address1"</code> </p> <p> <code>"name2", "address2"</code> </p>
**/
export declare class CsvMappingParameters extends SpeakeasyBase {
    recordColumnDelimiter: string;
    recordRowDelimiter: string;
}
