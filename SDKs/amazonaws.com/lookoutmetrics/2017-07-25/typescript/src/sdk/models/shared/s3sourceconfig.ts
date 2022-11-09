import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileFormatDescriptor } from "./fileformatdescriptor";


// S3SourceConfig
/** 
 * Contains information about the configuration of the S3 bucket that contains source files.
**/
export class S3SourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileFormatDescriptor" })
  fileFormatDescriptor?: FileFormatDescriptor;

  @Metadata({ data: "json, name=HistoricalDataPathList" })
  historicalDataPathList?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=TemplatedPathList" })
  templatedPathList?: string[];
}
