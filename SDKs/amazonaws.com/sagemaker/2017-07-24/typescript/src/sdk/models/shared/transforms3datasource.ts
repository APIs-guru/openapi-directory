import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataTypeEnum } from "./s3datatypeenum";


// TransformS3DataSource
/** 
 * Describes the S3 data source.
**/
export class TransformS3DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3DataType" })
  s3DataType: S3DataTypeEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
