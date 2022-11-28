import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3DataTypeEnum } from "./s3datatypeenum";



// TransformS3DataSource
/** 
 * Describes the S3 data source.
**/
export class TransformS3DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3DataType" })
  s3DataType: S3DataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
