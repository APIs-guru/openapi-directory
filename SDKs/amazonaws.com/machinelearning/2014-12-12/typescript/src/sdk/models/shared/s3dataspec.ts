import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3DataSpec
/** 
 *  Describes the data specification of a <code>DataSource</code>.
**/
export class S3DataSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataLocationS3" })
  dataLocationS3: string;

  @Metadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @Metadata({ data: "json, name=DataSchema" })
  dataSchema?: string;

  @Metadata({ data: "json, name=DataSchemaLocationS3" })
  dataSchemaLocationS3?: string;
}
