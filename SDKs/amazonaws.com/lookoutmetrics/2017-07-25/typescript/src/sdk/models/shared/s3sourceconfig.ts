import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileFormatDescriptor } from "./fileformatdescriptor";



// S3SourceConfig
/** 
 * Contains information about the configuration of the S3 bucket that contains source files.
**/
export class S3SourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileFormatDescriptor" })
  fileFormatDescriptor?: FileFormatDescriptor;

  @SpeakeasyMetadata({ data: "json, name=HistoricalDataPathList" })
  historicalDataPathList?: string[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=TemplatedPathList" })
  templatedPathList?: string[];
}
