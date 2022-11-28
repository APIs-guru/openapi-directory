import { SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";
/**
 * An object that contains details about the data source of the import job.
**/
export declare class ImportDataSource extends SpeakeasyBase {
    dataFormat: DataFormatEnum;
    s3Url: string;
}
