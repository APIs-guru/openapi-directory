import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMls3DataTypeEnum } from "./automls3datatypeenum";



// AutoMls3DataSource
/** 
 * The Amazon S3 data source.
**/
export class AutoMls3DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3DataType" })
  s3DataType: AutoMls3DataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
