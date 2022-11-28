import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";



// ImportDataSource
/** 
 * An object that contains details about the data source of the import job.
**/
export class ImportDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat: DataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Url" })
  s3Url: string;
}
