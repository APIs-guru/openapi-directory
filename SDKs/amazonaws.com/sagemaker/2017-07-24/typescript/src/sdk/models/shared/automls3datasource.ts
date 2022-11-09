import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMls3DataTypeEnum } from "./automls3datatypeenum";


// AutoMls3DataSource
/** 
 * The Amazon S3 data source.
**/
export class AutoMls3DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3DataType" })
  s3DataType: AutoMls3DataTypeEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
