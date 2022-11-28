import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3DataSpec
/** 
 *  Describes the data specification of a <code>DataSource</code>.
**/
export class S3DataSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataLocationS3" })
  dataLocationS3: string;

  @SpeakeasyMetadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSchemaLocationS3" })
  dataSchemaLocationS3?: string;
}
