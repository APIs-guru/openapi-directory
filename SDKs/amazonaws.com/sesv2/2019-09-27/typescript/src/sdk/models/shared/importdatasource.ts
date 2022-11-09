import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataFormatEnum } from "./dataformatenum";


// ImportDataSource
/** 
 * An object that contains details about the data source of the import job.
**/
export class ImportDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataFormat" })
  dataFormat: DataFormatEnum;

  @Metadata({ data: "json, name=S3Url" })
  s3Url: string;
}
